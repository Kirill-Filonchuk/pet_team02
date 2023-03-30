import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { Icon, ToTop } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ToTop>
      {showTopBtn && (
        <Icon onClick={goToTop}>
          <FaAngleUp></FaAngleUp>
        </Icon>
      )}
    </ToTop>
  );
};
export default ScrollToTop;
