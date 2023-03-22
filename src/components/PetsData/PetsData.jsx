// import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

// import { selectError, selectIsLoading } from '../../redux/auth/authSelectors';

// import { useSelector } from 'react-redux';
// import { selectUserPets } from '../../redux/auth/authSelectors';

import { TfiPlus } from 'react-icons/tfi';
// import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import PetsList from '../PetsList/PetsList';
import {
  PetsTitle,
  ButtonWrapper,
  ButtonTitle,
  AddButton,
  Wrapper,
  Pictures,
  StyledButtonSection,
  LoaderUser,
} from './PetsData.styled';

function PetsData() {
  // const [showModal, setShowModal] = useState(false);
  // const pets = useSelector(selectUserPets);
  const pets = [];
  const loading = true;
  // const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const error = false;
  const petsLeng = pets?.length;

  const onClose = () => {
    // setShowModal(true);
  };

  return (
    <Wrapper>
      <StyledButtonSection>
        <PetsTitle>My pets:</PetsTitle>
        <ButtonWrapper>
          <ButtonTitle>Add pet</ButtonTitle>
          <AddButton onClick={onClose}>
            <TfiPlus color="white" />
          </AddButton>
        </ButtonWrapper>
      </StyledButtonSection>

      {/* {showModal && <ModalAddsPet setShowModal={setShowModal} />} */}
      {petsLeng > 0 && <PetsList pets={pets} />}
      {!loading && !error && petsLeng === 0 && (
        <Pictures>You don't have any pets added.</Pictures>
      )}
      {loading && (
        <LoaderUser>
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color={'rgb(245, 146, 86)'}
          />
        </LoaderUser>
      )}
      {/* {error && <p>Oops!</p>} */}
    </Wrapper>
  );
}

export default PetsData;
