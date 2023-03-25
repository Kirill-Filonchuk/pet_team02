import Notify from 'components/Notify';
import { useNotifyPosition } from 'hooks/useNotifyPosition';
import { useEffect, useState } from 'react';
import { useAddNoticeMutation } from 'redux/notices/noticesApi';

const TempAddPet = () => {
  const [addNotice, { isLoading }] = useAddNoticeMutation();

  // useEffect(() => {
  //   async function addPet() {
  //     try {
  //       await addNotice({
  //         title: '7Title ANTON',
  //         name: 'Ant',
  //         birthday: '13.07.1983',
  //         breed: 'human',
  //         place: 'Irpin',
  //         sex: 'male',
  //         category: 'lost-found',
  //         //   price: '150$',
  //         // comments: 'String whith 8 symbol min',
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   addPet();
  // }, [addNotice, count]);

  const onClickHandler = async () => {
    try {
      await addNotice({
        title: '7Title ANTON',
        name: 'Ant',
        birthday: '13.07.1983',
        breed: 'human',
        place: 'Irpin',
        sex: 'male',
        category: 'lost-found',
        //   price: '150$',
        // comments: 'String whith 8 symbol min',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Notify position={position}></Notify>
    </>
  );
};

export default TempAddPet;
