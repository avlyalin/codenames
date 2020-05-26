import { useEffect, useState } from 'react';

export function useMedia(mediaQuery) {
  const mql = window.matchMedia(mediaQuery);

  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    const handleMediaChange = () => setMatches(mql.matches);
    mql.addEventListener('change', handleMediaChange);
    return () => {
      mql.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return matches;
}
