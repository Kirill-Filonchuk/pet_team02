import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSpring, animated, useTransition } from '@react-spring/web';
import PetLearnMore from './PetLearnMore';
import { Overlay, ModalWrapper } from './ModalNotice.styled';

const modalRoot = document.querySelector('#modal-root');

const ModalNotice = ({ isOpen, onClose, id }) => {

  useEffect(() => {
    const closeByEsc = e => {
      if (e.code !== 'Escape') {
        return;
      }
      onClose();
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [onClose]);

  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: {
      duration: 350,
    },
  });

  const springs = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: 'translate(-50%, -50%)',
    config: {
      duration: 350,
    },
  });

  return modalTransition(
    (styles, isOpen) =>
      isOpen &&
      createPortal(
        <Overlay as={animated.div} style={styles} onClick={onClose}>
          <ModalWrapper
            as={animated.div}
            style={springs}
            onClick={e => e.stopPropagation()}
          >
                  <PetLearnMore onClose={onClose} id={id}></PetLearnMore>
          </ModalWrapper>
        </Overlay>,
        modalRoot
      )
  );
};

export default ModalNotice;
