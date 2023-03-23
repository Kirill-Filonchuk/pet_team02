import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ModalAddPet.module.css';
import { RiCloseLine } from 'react-icons/ri';
import ContentAddPet from './ContentAddPet/ContentAddPet.jsx';
// import styled from 'styled-components';

const modalRoot = document.querySelector('#modal-root');

export default function ModalAddPet({ onClose }) {
  useEffect(() => {
    console.log('Mount');
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      console.log('unmount');
      window.removeEventListener('keydown', hendleKeyDown);
    };
  });

  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Turn On Escape');
      onClose();
    }
  };

  const hendleClickBackdrope = e => {
    if (e.target === e.currentTarget) {
      console.log('click backgrope');
      onClose();
    }
  };

  return createPortal(
    <>
      <div className={styles.darkBG} onClick={hendleClickBackdrope} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeder}>
            <h2 className={styles.heading}>Add pet</h2>
            <h3 style={{ color: 'black' }}>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </h3>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <ContentAddPet setShowModal={onClose} />
        </div>
      </div>
    </>,
    modalRoot
  );
}
