import { useEffect } from 'react';

export const useModal = onClose => {
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.onscroll = function () {
      window.scrollTo(0, 0);
    };

    window.addEventListener('keydown', onEscClose);

    return () => {
      window.removeEventListener('keydown', onEscClose);
      window.onscroll = function () {};
    };
  }, [onClose]);

  return { onBackdropClick };
};
