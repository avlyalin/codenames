import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import { withTranslation } from 'react-i18next';
import { ToastContainer, Slide } from 'react-toastify';
import { CARDS_TYPES, FIELD_SIZES, LANGUAGES, TEAMS } from 'src/data/constants';
import * as Location from 'src/utils/location';
import * as FirebaseService from 'src/service';
import { getRemainingCardsCount } from 'src/utils/team-progress';
import { toast } from 'src/utils/toast';
import { Loader } from 'src/components/loader';
import { getDefaultDictionary } from 'src/utils/data-provider';
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
        dictionaryFileName: '',
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
      winnerTeam: '',
      isLoading: true,
    };
    this.sessionId = '';
    this.t = props.t;
    this.i18n = props.i18n;
  }

  async componentDidMount() {
    await this.setDefaultDictionary();
    await this.initializeSession();
  }

  async initializeSession() {
    try {
      await this.connectToSession();
      this.addListeners();
    } catch (error) {
      this.setState({ isLoading: false }, () => {
        toast.error(error.message);
      });
    }
  }

  setDefaultDictionary() {
    return new Promise((resolve) => {
      const dictionary = getDefaultDictionary(this.i18n.language);
      if (!dictionary) {
        this.setState({ isLoading: false }, () => {
          toast.error(this.t('error.common'));
        });
      }
      this.setState(
        {
          settings: {
            ...this.state.settings,
            dictionaryFileName: dictionary.fileName,
          },
        },
        resolve,
      );
    });
  }

  async connectToSession() {
    let sessionId = Location.getGameSessionId(window.location.href);
    let userId;

    if (sessionId) {
      ({ userId } = await FirebaseService.joinSession(sessionId));
    } else {
      ({ sessionId, userId } = await FirebaseService.initialize(
        this.state.settings,
      ));
      Location.setGameSessionId(sessionId);
    }
    this.sessionId = sessionId;
    this.setState(
      {
        connected: true,
        currentUser: { ...this.state.currentUser, id: userId },
      },
      () => {
        this.setState({ isLoading: false });
      },
    );
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
      this.setState({ winnerTeam });
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

  saveSettings({ language, dictionaryFileName, fieldSize }) {
    FirebaseService.saveSettings(this.sessionId, {
      language,
      dictionaryFileName,
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

  shareSession() {
    if (navigator.share) {
      navigator.share({
        title: this.t('root.title'),
        url: Location.getGameLink(this.sessionId),
      });
    } else {
      const isCopied = copy(Location.getGameLink(this.sessionId));
      if (isCopied) {
        toast.success(this.t('root.linkCopied'));
      } else {
        toast.error(this.t('error.linkNotCopied'));
      }
    }
  }

  generateCards() {
    FirebaseService.saveSettings(this.sessionId, this.state.settings)
      .then(() => {
        toast.success(this.t('root.cardsUpdated'));
      })
      .catch(() => {
        toast.error(this.t('root.cardsNotUpdated'));
      });
  }

  render() {
    return (
      <>
        <ToastContainer
          position="top-left"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          draggable={false}
          className={'absolute'}
          transition={Slide}
        />
        {this.state.isLoading && (
          <Loader
            isLoading={this.state.isLoading}
            text={this.t('root.appLoadingText')}
          />
        )}
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
                onClickShare={this.shareSession.bind(this)}
                onClickGenerateCards={this.generateCards.bind(this)}
              />
            </Route>
            <Route path="/game">
              <ProtectedGame
                connected={this.state.connected}
                sessionId={this.sessionId}
                captains={this.state.captains}
                currentUser={this.state.currentUser}
                cards={this.state.cards}
                winnerTeam={this.state.winnerTeam}
                onOpenCard={this.saveCard.bind(this)}
              />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

App.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
};

const HotApp = hot(withTranslation()(App));

export { HotApp as App };
