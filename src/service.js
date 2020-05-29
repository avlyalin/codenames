import firebase from 'firebase/app';
import 'firebase/database';
import { getRandomTeam } from 'src/utils/user';
import * as LocalStorage from './utils/local-storage';
import * as Errors from './data/errors';
import { getGamingCards } from './utils/data-provider';
import { TEAMS } from './data/constants';

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
});
const database = firebase.database();

const DB_SESSIONS_REF = 'sessions';
const DB_USERS_REF = 'sessions_users';
const DB_CARDS_REF = 'sessions_cards';

/**
 * Инициализация игровой сессии
 * @param language
 * @param fieldSize
 * @param dictionary
 * @returns {Promise<{sessionId: string, userId: string}>}
 */
export async function initialize({ language, fieldSize, dictionary }) {
  const { sessionId, userId } = await createSession({
    language,
    fieldSize,
    dictionary,
  });
  await setNewCards(sessionId, { dictionary, fieldSize });
  return { sessionId, userId };
}

/**
 * Создание игровой сессии
 * @param language
 * @param fieldSize
 * @param dictionary
 * @returns {Promise<{sessionId: string, userId: string}>}
 */
async function createSession({ language, fieldSize, dictionary }) {
  const sessionRef = database.ref(DB_SESSIONS_REF).push();
  const sessionId = sessionRef.key;
  const sessionPath = getSessionPath(sessionId);

  const newSession = {
    settings: {
      language,
      fieldSize,
      dictionary,
    },
    captains: {
      red: '',
      blue: '',
    },
    winner_team: '',
  };

  const userId = pushUser(sessionId);
  const userPath = getUserPath(sessionId, userId);
  const newUser = getUser();

  const updates = {
    [sessionPath]: newSession,
    [userPath]: newUser,
  };
  await database.ref().update(updates);
  LocalStorage.setUserToSession(sessionId, { userId, team: newUser.team });
  return { sessionId, userId };
}

/**
 * Присоединение к сессии
 * @param sessionId
 * @returns {Promise<{sessionId: *, userId: string}>}
 */
export async function joinSession(sessionId) {
  const sessionExists = await checkSession(sessionId);
  if (!sessionExists) {
    throw new Error(Errors['SESSION_NOT_FOUND']);
  }
  let user = LocalStorage.getSessionUser(sessionId);
  if (user) {
    return { sessionId, userId: user.userId };
  }
  user = getUser(sessionId);
  const userId = pushUser(sessionId);
  const userPath = getUserPath(sessionId, userId);
  await database.ref(userPath).set(user);
  LocalStorage.setUserToSession(sessionId, { userId, team: user.team });
  return { sessionId, userId };
}

/**
 * Проверка существования сессии
 * @param sessionId
 * @returns {Promise<boolean>}
 */
export async function checkSession(sessionId) {
  const sessionRef = getSessionRef(sessionId);
  const snapshot = await sessionRef.once('value');
  return snapshot.exists();
}

/**
 * Запись команды победителей
 * @param sessionId
 * @param winnerTeam
 * @return {Promise<any>}
 */
export function setWinnerTeam(sessionId, winnerTeam) {
  const winnerTeamRef = getWinnerTeamRef(sessionId);
  return winnerTeamRef.update({ winner_team: winnerTeam });
}

/**
 * Установка карточек
 * @param sessionId
 * @param dictionary
 * @param fieldSize
 * @returns {Promise<any>}
 */
export async function setNewCards(sessionId, { dictionary, fieldSize }) {
  const cardsRef = getCardsRef(sessionId);
  const cards = getGamingCards(dictionary, fieldSize);
  return cardsRef.set(cards);
}

/**
 * Открытие карточки
 * @param sessionId
 * @param cardId
 * @returns {Promise<any>}
 */
export async function updateCard(sessionId, cardId) {
  const cardRef = getCardsRef(sessionId).child(cardId);
  return cardRef.update({ opened: true });
}

/**
 * Сохранение настроек
 * @param sessionId
 * @param language
 * @param dictionary
 * @param fieldSize
 * @returns {Promise<any>}
 */
export async function saveSettings(
  sessionId,
  { language, dictionary, fieldSize },
) {
  const settingsPath = getSettingsPath(sessionId);
  const winnerTeamPath = getWinnerTeamPath(sessionId);
  const cardsPath = getCardsPath(sessionId);
  const cards = getGamingCards(dictionary, fieldSize);

  const updates = {
    [winnerTeamPath]: '',
    [settingsPath]: { language, dictionary, fieldSize },
    [cardsPath]: cards,
  };
  return database.ref().update(updates);
}

/**
 * listener настроек
 * @param sessionId
 * @param callback
 */
export function onChangeSettings(sessionId, callback) {
  const settingsRef = getSettingsRef(sessionId);
  settingsRef.on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

/**
 * Сохранение данных юзера
 * @param sessionId
 * @param id
 * @param name
 * @param team
 * @returns {Promise<any>}
 */
export async function saveUser(sessionId, { id, name, team }) {
  LocalStorage.setUsername(name);
  const userRef = getUserRef(sessionId, id);
  return userRef.update({ name, team });
}

/**
 *
 * @param sessionId
 * @param userId
 * @param team
 * @returns {Promise<any>}
 */
export async function setTeamMember(sessionId, userId, team) {
  const userRef = getUserRef(sessionId, userId);
  await userRef.update({ team });
  const captainsRef = getCaptainsRef(sessionId, team);
  return captainsRef.transaction((captains) => {
    if (captains[TEAMS['blue']] === userId) {
      captains[TEAMS['blue']] = '';
    }
    if (captains[TEAMS['red']] === userId) {
      captains[TEAMS['red']] = '';
    }
    return captains;
  });
}

/**
 * Установка юзера капитаном
 * @param sessionId
 * @param userId
 * @param team
 * @returns {Promise<any>}
 */
export async function setTeamCaptain(sessionId, userId, team) {
  const captainsRef = getCaptainsRef(sessionId);
  const userRef = getUserRef(sessionId, userId);
  await userRef.update({ team });
  return captainsRef.transaction((captains) => {
    // сбрасываем капитана, если это указанный юзер
    if (captains[TEAMS['blue']] === userId) {
      captains[TEAMS['blue']] = '';
    }
    if (captains[TEAMS['red']] === userId) {
      captains[TEAMS['red']] = '';
    }
    // устанавливаем юзера капитаном указанной команды
    captains[team] = userId;
    return captains;
  });
}

/**
 * listener капитанов
 * @param sessionId
 * @param callback
 */
export function onChangeCaptains(sessionId, callback) {
  const captainsRef = getCaptainsRef(sessionId);
  captainsRef.on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

/**
 * listener юзеров
 * @param sessionId
 * @param callback
 */
export function onChangeUsers(sessionId, callback) {
  const usersRef = getUsersRef(sessionId);
  usersRef.on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

/**
 * listener карточек
 * @param sessionId
 * @param callback
 */
export function onChangeCards(sessionId, callback) {
  const usersRef = getCardsRef(sessionId);
  usersRef.on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

/**
 * listener победителей
 * @param sessionId
 * @param callback
 */
export function onChangeWinnerTeam(sessionId, callback) {
  const winnerTeamRef = getWinnerTeamRef(sessionId);
  winnerTeamRef.on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

function pushUser(sessionId) {
  return getUsersRef(sessionId).push().key;
}

function getUser() {
  const username = LocalStorage.getUsername() || 'Неизвестный';
  return {
    name: username,
    team: getRandomTeam(),
    role: '',
  };
}

function getSessionPath(sessionId) {
  return `${DB_SESSIONS_REF}/${sessionId}`;
}

function getSessionRef(sessionId) {
  return database.ref(getSessionPath(sessionId));
}

function getSettingsPath(sessionId) {
  const sessionPath = getSessionPath(sessionId);
  return `${sessionPath}/settings`;
}

function getSettingsRef(sessionId) {
  const settingsPath = getSettingsPath(sessionId);
  return database.ref(settingsPath);
}

function getUsersPath(sessionId) {
  return `${DB_USERS_REF}/${sessionId}`;
}

function getUsersRef(sessionId) {
  const usersPath = getUsersPath(sessionId);
  return database.ref(usersPath);
}

function getUserPath(sessionId, userId) {
  const usersPath = getUsersPath(sessionId);
  return `${usersPath}/${userId}`;
}

function getUserRef(sessionId, userId) {
  const userPath = getUserPath(sessionId, userId);
  return database.ref(userPath);
}

function getCardsPath(sessionId) {
  return `${DB_CARDS_REF}/${sessionId}`;
}

function getCardsRef(sessionId) {
  const cardsPath = getCardsPath(sessionId);
  return database.ref(cardsPath);
}

function getCaptainsPath(sessionId) {
  const sessionPath = getSessionPath(sessionId);
  return `${sessionPath}/captains`;
}

function getCaptainsRef(sessionId) {
  const captainsPath = getCaptainsPath(sessionId);
  return database.ref(captainsPath);
}

function getWinnerTeamPath(sessionId) {
  const winnerPath = getSessionPath(sessionId);
  return `${winnerPath}/winner_team`;
}

function getWinnerTeamRef(sessionId) {
  const winnerPath = getWinnerTeamPath(sessionId);
  return database.ref(winnerPath);
}
