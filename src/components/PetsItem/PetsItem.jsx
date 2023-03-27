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
// import { HiTrash } from 'react-icons/hi';

export const PetsItem=({
  _id,
  photo,
  name,
  birthDate,
  breed,
  comments,
}) => {
  // const dispatch = useDispatch();
  const[deletePet] = useDeleteUserPetMutation();
  
  // const newDate = new Date(birthDate).toLocaleString().split(',')[0];

  
  return (
    <>
      <PetItem key={_id} id={_id}>
        <PetImage src={photo} alt={name} />
        <ListInfo>
          <ListInfoItem ><ListInfoTitle>Name:</ListInfoTitle> {name}</ListInfoItem>
          <ListInfoItem ><ListInfoTitle>Date of birth:</ListInfoTitle> {birthDate}</ListInfoItem>
          <ListInfoItem ><ListInfoTitle>Breed:</ListInfoTitle> {breed}</ListInfoItem>
          <ListInfoItem ><ListInfoTitle>Comments:</ListInfoTitle> {comments}</ListInfoItem>
        </ListInfo>


        <DeleteIcon
                onClick={()=>deletePet(_id)}
        >
          <DeleteImage/>
          {/* <DeleteImage src={deleteIcon} alt="Delete Icon" /> */}
        </DeleteIcon>
      </PetItem>
    </>
  );
};
