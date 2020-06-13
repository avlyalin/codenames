export function getGameSessionId(url) {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);
  return searchParams.get('gameId');
}

export function getGameLink() {
  return window.location.href;
}

export function setGameSessionId(sessionId) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('gameId', sessionId);
  const newRelativePathQuery = `${
    window.location.pathname
  }?${searchParams.toString()}${window.location.hash}`;
  window.history.pushState(null, '', newRelativePathQuery);
}
