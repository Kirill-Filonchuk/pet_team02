import axios from 'axios';
import { useEffect, useState } from 'react';
import NoticesCardList from '../NoticesCardList/NoticesCardList';
import TempContainer from '../TempContainer/TempContainer';
// import { useOutletContext } from "react-router-dom";

const NoticesCategoriesList = () => {
  // const [category, setCategory] = useOutletContext();
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const getPets = async () => {
      const response = await axios.get(
        'https://641493898dade07073c3d8df.mockapi.io/api/pets/pets-list'
      );
      // console.log(response.data);
      setPets(response.data);
    };

    getPets();
  }, []);

  return (
    <section>
      <TempContainer>
        <NoticesCardList label="sell" list={pets} />
      </TempContainer>
    </section>
  );
};

export default NoticesCategoriesList;
