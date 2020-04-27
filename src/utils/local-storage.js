function getUsername() {
  return localStorage.getItem('username');
}

function setUsername(username) {
  localStorage.setItem('username', username);
}

function getSession(sessionId) {
  return !!localStorage.getItem(sessionId);
}

function setUserToSession(sessionId, { userId }) {
  localStorage.setItem(sessionId, JSON.stringify({ userId }));
}

function getSessionUser(sessionId) {
  const user = localStorage.getItem(sessionId);
  return JSON.parse(user);
}

export { getUsername, setUsername, getSessionUser, setUserToSession };
