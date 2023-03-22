// import { useDispatch } from 'react-redux';
// import { deletePet } from '../../redux/auth/authOperations';
import deleteIcon from './delete-icon.svg';

import {
  PetItem,
  PetImage,
  ListInfo,
  ListInfoItem,
  DeleteIcon,
  DeleteImage,
} from './PetsItem.styled';

export default function PetsItem({
  id,
  avatar,
  name,
  birthDate,
  breed,
  comments,
}) {
  // const dispatch = useDispatch();

  const newDate = new Date(birthDate).toLocaleString().split(',')[0];
  return (
    <>
      <PetItem>
        <PetImage src={avatar.url} alt={name} />
        <ListInfo>
          <ListInfoItem>Name: {name}</ListInfoItem>
          <ListInfoItem>Date of birth: {newDate}</ListInfoItem>
          <ListInfoItem>Breed: {breed}</ListInfoItem>
          <ListInfoItem>Comments: {comments}</ListInfoItem>
        </ListInfo>
        <DeleteIcon
        // onClick={() => dispatch(deletePet(id))}
        >
          <DeleteImage src={deleteIcon} alt="Delete Icon" />
        </DeleteIcon>
      </PetItem>
    </>
  );
}
