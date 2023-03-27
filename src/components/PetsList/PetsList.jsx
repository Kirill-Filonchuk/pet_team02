import {PetsItem} from 'components/PetsItem/PetsItem';
// import { HiTrash } from 'react-icons/hi';
// import { useDispatch } from 'react-redux';
// import { deletePet } from 'redux/pet/operations';
// import { getPets } from 'redux/pet/selectors';

 const PetsList = ({pets}) =>{
// const pets = useSelector(getPets);
// const dispatch = useDispatch();


  if (pets) {

 
    const elements = pets.map(
      ({ _id, photo, name, birthDate, breed, comment }) => {
       
        return (
       <>
          <PetsItem
           key={_id}
            _id={_id}
            name={name}
            photo={photo}
            birthDate={birthDate}
            breed={breed}
            comments={comment}
            
          />
        </>
        );
      }
    );
    return <>{elements}</>;
  }
};

export default PetsList;
