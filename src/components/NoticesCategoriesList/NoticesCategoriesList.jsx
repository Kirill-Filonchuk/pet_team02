import axios from 'axios';
import NoticesCardList from '../NoticesCardList';
import Container from '../Container';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NoticesCategoriesList = () => {
  const noticesNavLinks = useOutletContext();
  const { pathname: currentLocationPath } = useLocation();

  const [pets, setPets] = useState([]);
  const [title, setTitle] = useState();

  //Temporary useEffect -> mockAPI
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

  useEffect(() => {
    const { title } = noticesNavLinks.find(
      ({ to }) => to === currentLocationPath
    );
    setTitle(title);
  }, [noticesNavLinks, currentLocationPath]);

  return (
    <section>
      <Container>
        <NoticesCardList label={title} list={pets} />
      </Container>
    </section>
  );
};

export default NoticesCategoriesList;
