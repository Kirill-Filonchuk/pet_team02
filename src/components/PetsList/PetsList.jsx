import PetsItem from 'components/PetsItem/PetsItem';

export default function PetsList({ pets }) {
  if (pets) {
    const elements = pets.map(
      ({ _id, avatar, name, birthDate, breed, comments }) => {
        return (
          <PetsItem
            key={_id}
            id={_id}
            name={name}
            avatar={avatar}
            birthDate={birthDate}
            breed={breed}
            comments={comments}
          />
        );
      }
    );
    return <>{elements}</>;
  }
}
