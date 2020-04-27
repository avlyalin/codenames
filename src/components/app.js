import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import * as FirebaseService from '../service';
import { LANGUAGES, FIELD_SIZES, CARDS_DICTIONARIES } from '../data/constants';
import { getGameSessionId } from '../utils/query-params';
import { getGamingCards } from '../utils/data-provider';
import { Lobby } from './lobby';
import { PlayingField } from './playing-field';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inGame: false,
      settings: {
        language: LANGUAGES['ru'],
        fieldSize: FIELD_SIZES['5x5'],
        dictionary: CARDS_DICTIONARIES['gaga'],
      },
      users: {},
      cards: [],
    };
  }

  async componentDidMount() {
    await this.connectToSession();
  }

  async connectToSession() {
    try {
      let gameSessionId = getGameSessionId(window.location.href);

      if (gameSessionId) {
        const sessionExists = await FirebaseService.checkSession(gameSessionId);
        if (!sessionExists) {
          throw new Error('Сессия не найдена');
        }
        await FirebaseService.joinSession(gameSessionId);
        console.log('joined session');
      } else {
        gameSessionId = await FirebaseService.initialize(this.state.settings);
        const cards = this.generateGamingCards();
        await FirebaseService.setCards(gameSessionId, cards);
        console.log('new session created');
      }

      this.sessionId = gameSessionId;
      console.log(gameSessionId);
      FirebaseService.onChangeSettings(
        gameSessionId,
        this.onDbSettingsChange.bind(this)
      );
      FirebaseService.onChangeUsers(gameSessionId, (users) => {
        this.setState({ users: users });
      });
      FirebaseService.onChangeCards(gameSessionId, (cards) => {
        this.setState({ cards: cards });
        console.log('cards fetched...');
      });
    } catch (e) {
      console.error(e);
    }
  }

  onDbSettingsChange(settings) {
    this.setState({ settings: settings });
    // сбросить игру
  }

  saveSelectedCard(cardId) {
    FirebaseService.openCard(this.sessionId, cardId).then(() => {
      console.log(`card ${cardId} opened`);
    });
  }

  updateUser(username) {
    // todo
  }

  updateSettings({ language, dictionary, fieldSize }) {
    // todo
  }

  generateGamingCards() {
    const { settings } = this.state;
    return getGamingCards(settings.dictionary, settings.fieldSize);
  }

  startGame() {
    this.setState({ inGame: true });
  }

  render() {
    return (
      <div>
        {this.state.inGame ? (
          <PlayingField
            cards={this.state.cards}
            onSelectCard={this.saveSelectedCard.bind(this)}
          />
        ) : (
          <Lobby
            settings={this.state.settings}
            users={this.state.users}
            onUpdateUser={this.updateUser}
            onChangeSettings={this.updateSettings}
            onClickPlay={this.startGame.bind(this)}
          />
        )}
      </div>
    );
  }
}

const HotApp = hot(App);

export { HotApp as App };
