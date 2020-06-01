import { useEffect, useState } from 'react';

export function useMedia(mediaQuery) {
  const mql = window.matchMedia(mediaQuery);

  const [matches, setMatches] = useState(mql.matches);

  useEffect(() => {
    const handleMediaChange = () => setMatches(mql.matches);
    mql.addListener(handleMediaChange);
    return () => {
      mql.removeListener(handleMediaChange);
    };
  }, []);

  return matches;
}
