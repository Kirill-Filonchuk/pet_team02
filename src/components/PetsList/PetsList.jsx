import { PetsItem } from 'components/PetsItem/PetsItem';

const PetsList = ({ pets }) => {
  return (
    <ul>
      {pets &&
        pets.map(({ _id, photo, name, birthday, breed, comment }) => {
          return (
            <PetsItem
              key={_id}
              _id={_id}
              name={name}
              photo={photo}
              birthday={birthday}
              breed={breed}
              comments={comment}
            />
          );
        })}
    </ul>
  );
};

export default PetsList;
