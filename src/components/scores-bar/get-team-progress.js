/**
 * Возвращает процент открытых карточек
 * @param {array} cards
 * @param {string} team
 */
export function getTeamProgress(cards, team) {
  let cardsCount = 0;
  let openedCount = 0;
  cards.forEach(({ color, opened }) => {
    if (color !== team) return;
    cardsCount++;
    if (opened) openedCount++;
  });
  if (cardsCount === 0) {
    return 0;
  }
  return Math.round((openedCount / cardsCount) * 100);
}
