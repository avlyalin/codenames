export function getGameSessionId(url) {
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);
  return searchParams.get('gameId');
}

export function getGameLink(sessionId) {
  return `${window.location.href}?gameId=${sessionId}`;
}
