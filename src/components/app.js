import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import * as FirebaseService from '../service';
import {
  LANGUAGES,
  FIELD_SIZES,
  CARDS_DICTIONARIES,
  USERS_ROLES,
} from '../data/constants';
import { getGameSessionId } from '../utils/query-params';
import { getGamingCards } from '../utils/data-provider';
import * as LocalStorage from '../utils/local-storage';
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
      currentUser: {
        id: '',
        name: '',
      },
    };
  }

  async componentDidMount() {
    const username = LocalStorage.getUsername() || '';
    this.setState({
      currentUser: { ...this.state.currentUser, name: username },
    });
    await this.connectToSession();
  }

  async connectToSession() {
    try {
      let sessionId = getGameSessionId(window.location.href);
      let userId;

      if (sessionId) {
        const sessionExists = await FirebaseService.checkSession(sessionId);
        if (!sessionExists) {
          throw new Error('Сессия не найдена');
        }
        ({ userId } = await FirebaseService.joinSession(sessionId));
        console.log('joined session');
      } else {
        ({ sessionId, userId } = await FirebaseService.initialize(
          this.state.settings
        ));
        const cards = getGamingCards(
          this.state.settings.dictionary,
          this.state.settings.fieldSize
        );
        await FirebaseService.setCards(sessionId, cards);
        console.log(`session with id ${sessionId} created`);
      }
      this.sessionId = sessionId;
      this.setState({
        currentUser: { ...this.state.currentUser, id: userId },
      });

      FirebaseService.onChangeSettings(sessionId, (settings) => {
        this.setState({ settings, inGame: false });
      });
      FirebaseService.onChangeUsers(sessionId, (users) => {
        console.log('change users');
        this.setState({ users: users });
      });
      FirebaseService.onChangeCards(sessionId, (cards) => {
        this.setState({ cards: cards });
        console.log('cards fetched...');
      });
    } catch (e) {
      console.error(e);
    }
  }

  saveCard(cardId) {
    FirebaseService.updateCard(this.sessionId, cardId);
  }

  saveUsername(name) {
    const currentUser = this.state.currentUser;
    if (currentUser.name !== name) {
      LocalStorage.setUsername(name);
      this.setState({
        currentUser: { ...currentUser, name: name },
      });
      FirebaseService.updateUser(this.sessionId, {
        id: currentUser.id,
        name,
      });
    }
  }

  saveSettings({ language, dictionary, fieldSize }) {
    FirebaseService.updateSettings(this.sessionId, {
      language,
      dictionary,
      fieldSize,
    });
    const cards = getGamingCards(dictionary, fieldSize);
    FirebaseService.setCards(this.sessionId, cards);
  }

  joinTeam(team) {
    FirebaseService.updateUser(this.sessionId, {
      id: this.state.currentUser.id,
      team,
      role: USERS_ROLES['player'],
    });
  }

  joinTeamAsCaptain(team) {
    FirebaseService.updateUser(this.sessionId, {
      id: this.state.currentUser.id,
      team,
      role: USERS_ROLES['captain'],
    });
  }

  startGame() {
    this.setState({ inGame: true });
  }

  stopGame() {
    this.setState({ inGame: false });
  }

  render() {
    return (
      <div>
        {this.state.inGame ? (
          <PlayingField
            cards={this.state.cards}
            onOpenCard={this.saveCard.bind(this)}
            onClickBack={this.stopGame.bind(this)}
          />
        ) : (
          <Lobby
            settings={this.state.settings}
            users={this.state.users}
            currentUser={this.state.currentUser}
            onChangeUsername={this.saveUsername.bind(this)}
            onChangeSettings={this.saveSettings.bind(this)}
            onClickPlay={this.startGame.bind(this)}
            onJoinTeam={this.joinTeam.bind(this)}
            onJoinTeamAsCaptain={this.joinTeamAsCaptain.bind(this)}
          />
        )}
      </div>
    );
  }
}

const HotApp = hot(App);

export { HotApp as App };
