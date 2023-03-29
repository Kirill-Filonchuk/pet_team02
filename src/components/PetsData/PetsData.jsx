import { ThreeDots } from 'react-loader-spinner';
import { TfiPlus } from 'react-icons/tfi';

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
import { useEffect } from 'react';
import { useState } from 'react';
import ModalAddUserPet from 'components/ModalAddUserPet/ModalAddPet/ModalAddUserPet';
import { useGetUserPetsQuery } from 'redux/pet/userPetsApi';
import PetsList from 'components/PetsList/PetsList';

const PetsData = () => {
  const [openModal, setOpenModal] = useState(false);

  const { data, isFetching: isLoading } = useGetUserPetsQuery();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openModal]);

  // const loading = true;
  if (!data) {
    return;
  }

  const { result } = data;
  const { pets } = result;
  return (
    <Wrapper>
      <StyledButtonSection>
        <PetsTitle>My pets:</PetsTitle>
        <ButtonWrapper>
          <ButtonTitle> Add pet</ButtonTitle>
          <AddButton onClick={() => setOpenModal(!openModal)}>
            <TfiPlus color="white" />
          </AddButton>
        </ButtonWrapper>
      </StyledButtonSection>
      {openModal && (
        <ModalAddUserPet
          onClose={() => setOpenModal(false)}
          isOpen={openModal}
        />
      )}
      {isLoading && (
        <LoaderUser>
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color={'rgb(245, 146, 86)'}
          />
        </LoaderUser>
      )}
      {pets.length > 0 && <PetsList pets={pets} />}
      {pets.length === 0 && <Pictures>You don't have any pets added.</Pictures>}
      {/* {loading && (
        <LoaderUser>
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color={'rgb(245, 146, 86)'}
          />
        </LoaderUser>
      )} */}
      {/* {error && <p>Oops!</p>} */}
    </Wrapper>
  );
};

export default PetsData;
