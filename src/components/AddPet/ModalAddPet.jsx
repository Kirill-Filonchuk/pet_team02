// import Modal from 'components/Modal';
import CommonModal from 'components/UIKit/CommonModal';
import { useState } from 'react';

// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  AddPetWrapper,
  BackButton,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  CategoryRadio,
  Description,
  Fields,
  Input,
  Label,
  NextButton,
  SexItem,
  SexLabel,
  SexList,
  SexRadio,
  SexTitle,
  SexWrapper,
  Title,
  ToolBar,
} from './ModalAddPet.styled';
// import styles from './ModalAddPet.module.css';
// import { RiCloseLine } from 'react-icons/ri';
// import ContentAddPet from './ContentAddPet/ContentAddPet.jsx';
// import styled from 'styled-components';

const modalRoot = document.querySelector('#modal-root');

export default function ModalAddPet({ onClose }) {
  // useEffect(() => {
  //   console.log('Mount');
  //   window.addEventListener('keydown', hendleKeyDown);
  //   return () => {
  //     console.log('unmount');
  //     window.removeEventListener('keydown', hendleKeyDown);
  //   };
  // });

  // const hendleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     console.log('Turn On Escape');
  //     onClose();
  //   }
  // };

  // const hendleClickBackdrope = e => {
  //   if (e.target === e.currentTarget) {
  //     console.log('click backgrope');
  //     onClose();
  //   }
  // };

  //ANTON'S CODE------------------------------------
  const [step, setStep] = useState(1);
  const onAddPetSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements);
  };
  //ANTON'S CODE------------------------------------

  return createPortal(
    <>
      {/* <div className={styles.darkBG} onClick={hendleClickBackdrope} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeder}>
            <h2 className={styles.heading}>Add pet</h2>
            <p className={styles.titleForm}>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <ContentAddPet setShowModal={onClose} />
        </div>
      </div> */}
      <CommonModal onClose={onClose}>
        <AddPetWrapper onSubmit={onAddPetSubmit}>
          {/* STEP -1 */}
          {step === 1 && (
            <>
              <Title>Add pet</Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet, consectetur
              </Description>
              <CategoryList>
                <CategoryItem>
                  <CategoryRadio
                    id="lost_found"
                    type="radio"
                    name="category"
                    className="visually-hidden"
                    value="lost-found"
                    onClick={e => {
                      console.log(e.target.value);
                    }}
                  />
                  <CategoryLabel htmlFor="lost_found">lost/found</CategoryLabel>
                </CategoryItem>

                <CategoryItem>
                  <CategoryRadio
                    id="in_good_hands"
                    type="radio"
                    name="category"
                    value="in-good-hands"
                    onClick={e => {
                      console.log(e.target.value);
                    }}
                    className="visually-hidden"
                  />
                  <CategoryLabel htmlFor="in_good_hands">
                    in good hands
                  </CategoryLabel>
                </CategoryItem>

                <CategoryItem>
                  <CategoryRadio
                    id="sell_"
                    type="radio"
                    name="category"
                    value="sell"
                    onClick={e => {
                      console.log(e.target.value);
                    }}
                    className="visually-hidden"
                  />
                  <CategoryLabel htmlFor="sell_">sell</CategoryLabel>
                </CategoryItem>
              </CategoryList>
              <Fields>
                <Label>
                  Tittle of ad
                  <Input type="text" placeholder="Type name" />
                </Label>

                <Label>
                  Name pet
                  <Input type="text" placeholder="Type name pet" />
                </Label>

                <Label>
                  Date of birth
                  <Input type="text" placeholder="Type date of birth" />
                </Label>

                <Label>
                  Breed
                  <Input type="text" placeholder="Type breed" />
                </Label>
              </Fields>
              <ToolBar>
                <NextButton
                  type="button"
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  Next
                </NextButton>
                <BackButton
                  type="button"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Cancel
                </BackButton>
              </ToolBar>
            </>
          )}

          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* =============================================================================== */}
          {/* =============================================================================== */}

          {/* STEP -2 */}
          {step === 2 && (
            <>
              <Title>Add pet</Title>

              <SexWrapper>
                <SexTitle>The sex:</SexTitle>
                <SexList>
                  <SexItem>
                    <SexRadio
                      id="sex_male"
                      type="radio"
                      name="sex"
                      value="male"
                      className="visually-hidden"
                    />
                    <SexLabel htmlFor="sex_male" isMale>
                      Male
                    </SexLabel>
                  </SexItem>
                  <SexItem>
                    <SexRadio
                      id="sex_female"
                      type="radio"
                      name="sex"
                      value="female"
                      className="visually-hidden"
                    />
                    <SexLabel htmlFor="sex_female">Female</SexLabel>
                  </SexItem>
                </SexList>
              </SexWrapper>
              <ToolBar>
                <NextButton
                  type="submit"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Done
                </NextButton>
                <BackButton
                  type="button"
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Back
                </BackButton>
              </ToolBar>
            </>
          )}
        </AddPetWrapper>
      </CommonModal>
    </>,
    modalRoot
  );
}
