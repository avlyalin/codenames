import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as FirebaseService from '../service';
import {
  LANGUAGES,
  FIELD_SIZES,
  CARDS_DICTIONARIES,
  TEAMS,
} from '../data/constants';
import { getGameSessionId } from '../utils/query-params';
import { Lobby } from './lobby';
import { NotFound } from './not-found';
import { ProtectedPlayingField } from './protected-playing-field';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      errorMessage: '',
      settings: {
        language: LANGUAGES['ru'],
        fieldSize: FIELD_SIZES['5x5'],
        dictionary: CARDS_DICTIONARIES['gaga'],
      },
      users: [],
      cards: [],
      captains: {
        [TEAMS['blue']]: '',
        [TEAMS['red']]: '',
      },
      currentUser: {
        id: '',
        name: '',
        team: '',
        role: '',
      },
    };
    this.sessionId = '';
  }

  async componentDidMount() {
    await this.initialize();
  }

  async initialize() {
    try {
      await this.connectToSession();
      this.addListeners();
    } catch (error) {
      console.log(error.message);
      this.setState({ errorMessage: error.message });
    }
  }

  async connectToSession() {
    let sessionId = getGameSessionId(window.location.href);
    let userId;

    if (sessionId) {
      ({ userId } = await FirebaseService.joinSession(sessionId));
    } else {
      ({ sessionId, userId } = await FirebaseService.initialize(
        this.state.settings
      ));
    }
    this.sessionId = sessionId;
    this.setState({
      connected: true,
      currentUser: { ...this.state.currentUser, id: userId },
    });
  }

  addListeners() {
    FirebaseService.onChangeUsers(
      this.sessionId,
      this.onChangeUsers.bind(this)
    );
    FirebaseService.onChangeSettings(this.sessionId, (settings) => {
      this.setState({ settings });
    });
    FirebaseService.onChangeCards(this.sessionId, (cards) => {
      this.setState({ cards });
    });
    FirebaseService.onChangeCaptains(this.sessionId, (captains) => {
      this.setState({ captains: { ...this.state.captains, ...captains } });
    });
  }

  onChangeUsers(newUsers) {
    const users = [];
    let currentUser = {};
    for (const [id, user] of Object.entries(newUsers)) {
      if (id === this.state.currentUser.id) {
        currentUser = { id, ...user };
      }
      users.push({ id, ...user });
    }
    this.setState({ users, currentUser });
  }

  saveSettings({ language, dictionary, fieldSize }) {
    FirebaseService.saveSettings(this.sessionId, {
      language,
      dictionary,
      fieldSize,
    });
  }

  saveCard(cardId) {
    FirebaseService.updateCard(this.sessionId, cardId);
  }

  saveUsername(name) {
    FirebaseService.saveUser(this.sessionId, {
      ...this.state.currentUser,
      name,
    });
  }

  joinTeam(team) {
    FirebaseService.setTeamMember(
      this.sessionId,
      this.state.currentUser.id,
      team
    );
  }

  joinTeamAsCaptain(team) {
    FirebaseService.setTeamCaptain(
      this.sessionId,
      this.state.currentUser.id,
      team
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Lobby
              sessionId={this.sessionId}
              settings={this.state.settings}
              users={this.state.users}
              captains={this.state.captains}
              currentUser={this.state.currentUser}
              onChangeSettings={this.saveSettings.bind(this)}
              onChangeUsername={this.saveUsername.bind(this)}
              onJoinTeam={this.joinTeam.bind(this)}
              onJoinTeamAsCaptain={this.joinTeamAsCaptain.bind(this)}
            />
          </Route>
          <Route path="/game">
            <ProtectedPlayingField
              connected={this.state.connected}
              sessionId={this.sessionId}
              captains={this.state.captains}
              currentUser={this.state.currentUser}
              cards={this.state.cards}
              onOpenCard={this.saveCard.bind(this)}
            />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const HotApp = hot(App);

export { HotApp as App };
