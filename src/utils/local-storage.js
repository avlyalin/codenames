function getUsername() {
  return localStorage.getItem('username');
}

function setUsername(username) {
  localStorage.setItem('username', username);
}

function setUserToSession(sessionId, { userId, team }) {
  localStorage.setItem(sessionId, JSON.stringify({ userId, team }));
}

function getSessionUser(sessionId) {
  const user = localStorage.getItem(sessionId);
  return JSON.parse(user);
}

export { getUsername, setUsername, getSessionUser, setUserToSession };
