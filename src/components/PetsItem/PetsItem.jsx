import { useDeleteUserPetMutation } from 'redux/pet/userPetsApi';

import {
  PetItem,
  PetImage,
  ListInfo,
  ListInfoItem,
  DeleteIcon,
  DeleteImage,
  ListInfoTitle,
} from './PetsItem.styled';

export const PetsItem = ({ _id, photo, name, birthday, breed, comments }) => {
  const [deletePet] = useDeleteUserPetMutation();

  return (
    <>
      <PetItem key={_id} id={_id}>
        <PetImage src={photo} alt={name} />
        <ListInfo>
          <ListInfoItem>
            <ListInfoTitle>Name:</ListInfoTitle> {name}
          </ListInfoItem>
          <ListInfoItem>
            <ListInfoTitle>Date of birth:</ListInfoTitle> {birthday}
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
