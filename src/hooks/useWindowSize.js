import { breakpoints } from 'theme';
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function update() {
    setIsDesktop(window.innerWidth >= +breakpoints.desk);
    setIsTablet(
      window.innerWidth >= +breakpoints.tab &&
        window.innerWidth < +breakpoints.desk - 0.02
    );
    setIsMobile(window.innerWidth < +breakpoints.tab - 0.02);
  }

  useEffect(() => {
    update();
    window.addEventListener('resize', update, false);

    return () => {
      window.removeEventListener('resize', update, false);
    };
  }, []);

  return { isDesktop, isTablet, isMobile };
}
