import { useEffect } from 'react';
import { useAddNoticeMutation } from 'redux/notices/noticesApi';

const TempAddPet = () => {
  const [addNotice, { isLoading }] = useAddNoticeMutation();

  useEffect(() => {
    async function addPet() {
      try {
        await addNotice({
          title: 'Title Che',
          name: 'Ant',
          birthday: '13.07.1983',
          breed: 'human',
          place: 'Irpin',
          sex: 'male',
          category: 'sell',
          //   price: '150$',
          // comments: 'String whith 8 symbol min',
        });
      } catch (error) {
        console.log(error);
      }
    }

    addPet();
  }, [addNotice]);

  return <></>;
};

export default TempAddPet;
