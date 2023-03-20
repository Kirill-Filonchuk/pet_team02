import axios from 'axios';
import NoticesCardList from '../NoticesCardList';
import Container from '../Container';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Paginator from 'components/Paginator';
import { PaginatorWrapper } from './NoticesCategoriesList.styled';
import { useWindowSize } from 'hooks/useWindowSize';

const NoticesCategoriesList = () => {
  const noticesNavLinks = useOutletContext();
  const { pathname: currentLocationPath } = useLocation();

  const [pets, setPets] = useState([]);
  const [title, setTitle] = useState();
  const { isDesktop } = useWindowSize();

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

  //test fake pagintation
  const [page, setPage] = useState(1);

  return (
    <section>
      <Container>
        <NoticesCardList label={title} list={pets} />

        <PaginatorWrapper>
          <Paginator
            totalItems={300}
            currentPage={page}
            onPageClick={page => {
              console.log(page);
              setPage(page);
            }}
            nearbyQtyPages={isDesktop ? 2 : 1}
            perPage={8}
            // shouldScrollUp
          />
        </PaginatorWrapper>
      </Container>
    </section>
  );
};

export default NoticesCategoriesList;
