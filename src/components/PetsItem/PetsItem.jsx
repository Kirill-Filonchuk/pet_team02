// import { useDispatch } from 'react-redux';
// import { deletePet } from '../../redux/auth/authOperations';
// import { useDispatch } from 'react-redux';
import { useDeleteUserPetMutation } from 'redux/pet/userPetsApi';
// import deleteIcon from './delete-icon.svg';
// import { deletePet  } from 'redux/pet/operations';
import {
  PetItem,
  PetImage,
  ListInfo,
  ListInfoItem,
  DeleteIcon,
  DeleteImage,
  ListInfoTitle,
} from './PetsItem.styled';

export const PetsItem = ({ _id, photo, name, birthDate, breed, comments }) => {
  const [deletePet] = useDeleteUserPetMutation();

  // console.log('item', name);

  return (
    <>
      <PetItem key={_id} id={_id}>
        <PetImage src={photo} alt={name} />
        <ListInfo>
          <ListInfoItem>
            <ListInfoTitle>Name:</ListInfoTitle> {name}
          </ListInfoItem>
          <ListInfoItem>
            <ListInfoTitle>Date of birth:</ListInfoTitle> {birthDate}
          </ListInfoItem>
          <ListInfoItem>
            <ListInfoTitle>Breed:</ListInfoTitle> {breed}
          </ListInfoItem>
          <ListInfoItem>
            <ListInfoTitle>Comments:</ListInfoTitle> {comments}
          </ListInfoItem>
        </ListInfo>

        <DeleteIcon onClick={() => deletePet(_id)}>
          <DeleteImage />
        </DeleteIcon>
      </PetItem>
    </>
  );
};
