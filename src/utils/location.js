export function getGameSessionId(url) {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);
  return searchParams.get('gameId');
}

export function getGameLink(sessionId) {
  return `${window.location.href}?gameId=${sessionId}`;
}

export function setGameSessionId(sessionId) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('gameId', sessionId);
  const newRelativePathQuery = `${
    window.location.pathname
  }?${searchParams.toString()}`;
  history.pushState(null, '', newRelativePathQuery);
}
