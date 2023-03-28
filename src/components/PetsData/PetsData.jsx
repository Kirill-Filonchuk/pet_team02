// import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

// import { selectError, selectIsLoading } from '../../redux/auth/authSelectors';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectUserPets } from '../../redux/auth/authSelectors';

import { TfiPlus } from 'react-icons/tfi';
// import ModalAddsPet from '../ModalAddsPet/ModalAddsPet';
import {
  PetsTitle,
  ButtonWrapper,
  ButtonTitle,
  AddButton,
  Wrapper,
  Pictures,
  StyledButtonSection,
  LoaderUser,
  // PetsList,
} from './PetsData.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import ModalAddUserPet from 'components/ModalAddUserPet/ModalAddPet/ModalAddUserPet';
// import useAuth from 'hooks/useAuth/useAuth';
// import { refreshUserPets } from 'redux/pet/operations';
import { useGetUserPetsQuery } from 'redux/pet/userPetsApi';
import PetsList from 'components/PetsList/PetsList';
// import useAuth from 'hooks/useAuth/useAuth';
// import { getPets } from 'redux/pet/selectors';

const PetsData = () => {
  const [openModal, setOpenModal] = useState(false);
  // const [pets, setPets] = useState([]);
  // const dataPets = useSelector(getPets);
  // console.log(pets);
  // console.log(pets);
  // const dispatch = useDispatch();
  const{data}= useGetUserPetsQuery();
 

// useEffect(()=>{
// if(dataPets){
//   setPets(dataPets)
// }
// },[dataPets])

  useEffect(() => {
    // dispatch(refreshUserPets());


    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [ openModal]);
  // const [showModal, setShowModal] = useState(false);
  // const pets = useSelector(selectUserPets);
  // const pets = userPets;
  const loading = false;
  // const loading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const error = false;
  console.log(data);
if(!data){
  return
};

// const pets= data.result.pets;
const { result } = data;
const {pets} = result;
console.log(data);
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
      {console.log("----------",pets)}
      {pets.length > 0 && <PetsList pets={pets} />}
      {/* {!loading && !error && pets.length === 0 && ( */}
      {pets.length === 0 && <Pictures>You don't have any pets added.</Pictures>}
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
};

export default PetsData;
