import { TEAMS } from 'src/data/constants';
import { getRandomBool } from './math';

export function getRandomTeam() {
  return getRandomBool() ? TEAMS['red'] : TEAMS['blue'];
}
