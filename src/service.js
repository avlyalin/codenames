import * as LocalStorage from './utils/local-storage';
import firebase from 'firebase/app';
import 'firebase/database';

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

const DB_SESSIONS_REF = process.env.DB_SESSIONS_REF;
const DB_USERS_REF = process.env.DB_USERS_REF;
const DB_CARDS_REF = process.env.DB_CARDS_REF;

/**
 * Создание игровой сессии
 * @param language
 * @param fieldSize
 * @param dictionary
 * @returns {Promise<{sessionId: string, userId: string}>}
 */
export async function initialize({ language, fieldSize, dictionary }) {
  const sessionRef = database.ref(DB_SESSIONS_REF).push();
  const sessionId = sessionRef.key;
  const sessionPath = getSessionPath(sessionId);

  const newSession = {
    settings: {
      language,
      fieldSize,
      dictionary,
    },
  };

  const userId = pushUser(sessionId);
  const userPath = getUserPath(sessionId, userId);
  const newUser = getUser();

  const updates = {
    [sessionPath]: newSession,
    [userPath]: newUser,
  };
  await database.ref().update(updates);
  return { sessionId, userId };
}

/**
 * Присоединение к сессии
 * @param sessionId
 * @returns {Promise<{sessionId: *, userId: string}>}
 */
export async function joinSession(sessionId) {
  let user = LocalStorage.getSessionUser(sessionId);
  if (user) {
    return { sessionId, userId: user.userId };
  }
  user = getUser(sessionId);
  const userId = pushUser(sessionId);
  const userPath = getUserPath(sessionId, userId);
  await database.ref(userPath).set(user);
  LocalStorage.setUserToSession(sessionId, { userId });
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
 * Установка карточек
 * @param sessionId
 * @param cards
 * @returns {Promise<any>}
 */
export async function setCards(sessionId, cards) {
  const cardsRef = getCardsRef(sessionId);
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
 * Обновление настроек
 * @param sessionId
 * @param language
 * @param dictionary
 * @param fieldSize
 * @returns {Promise<any>}
 */
export async function updateSettings(
  sessionId,
  { language, dictionary, fieldSize }
) {
  const settingsRef = getSettingsRef(sessionId);
  return settingsRef.update({
    language,
    dictionary,
    fieldSize,
  });
}

/** //todo: удалить, слушать всех юзеров?
 * Обновление данных юзера
 * @param sessionId
 * @param id
 * @param name
 * @returns {Promise<any>}
 */
export async function updateUsername(sessionId, { id, name }) {
  const userRef = getUserRef(sessionId);
  return userRef.update({
    name,
  });
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

function pushUser(sessionId) {
  return getUsersRef(sessionId).push().key;
}

function getUser() {
  const username = LocalStorage.getUsername() || 'Неизвестный';
  return {
    username: username,
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
