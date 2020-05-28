import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  CARDS_DICTIONARIES,
  CARDS_TYPES,
  FIELD_SIZES,
  LANGUAGES,
  TEAMS,
} from 'src/data/constants';
import { getGameSessionId } from 'src/utils/query-params';
import * as FirebaseService from 'src/service';
import { getRemainingCardsCount } from 'src/utils/team-progress';
import { Lobby } from '../lobby';
import { NotFound } from '../not-found';
import { ProtectedGame } from '../game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      errorMessage: '',
      settings: {
        language: LANGUAGES['ru'],
        fieldSize: FIELD_SIZES['5x5'],
        dictionary: CARDS_DICTIONARIES['GAGA'],
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
        this.state.settings,
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
      this.onChangeUsers.bind(this),
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
    FirebaseService.onChangeWinnerTeam(this.sessionId, (winnerTeam) => {
      this.setState({ winnerTeam: winnerTeam.winner_team });
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

  saveCard({ id, card: { type, color } }) {
    if (!this.state.winnerTeam) {
      let winnerTeam = '';

      if (type === CARDS_TYPES['agent']) {
        const remainingCards = getRemainingCardsCount(this.state.cards, color);
        if (remainingCards === 1) {
          winnerTeam = color;
        }
      } else if (type === CARDS_TYPES['killer']) {
        winnerTeam =
          this.state.currentUser.team === TEAMS['blue']
            ? TEAMS['red']
            : TEAMS['blue'];
      }

      FirebaseService.updateCard(this.sessionId, id).then(() => {
        FirebaseService.setWinnerTeam(this.sessionId, winnerTeam);
      });
    } else {
      FirebaseService.updateCard(this.sessionId, id);
    }
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
      team,
    );
  }

  joinTeamAsCaptain(team) {
    FirebaseService.setTeamCaptain(
      this.sessionId,
      this.state.currentUser.id,
      team,
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
            <ProtectedGame
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
