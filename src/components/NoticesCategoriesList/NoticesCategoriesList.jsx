import axios from 'axios';
import NoticesCardList from '../NoticesCardList';
import Container from '../Container';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Paginator from 'components/Paginator';
import { PaginatorWrapper } from './NoticesCategoriesList.styled';
import { useWindowSize } from 'hooks/useWindowSize';
import { useGetNoticesQuery } from 'redux/notices/noticesApi';
import useAuth from 'hooks/useAuth/useAuth';

const NoticesCategoriesList = () => {
  const { isLoggedIn } = useAuth();
  const { isDesktop } = useWindowSize();

  const noticesNavLinks = useOutletContext();
  const { pathname: currentLocationPath } = useLocation();

  const [label, setLabel] = useState();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);

  useEffect(() => {
    const { label, category } = noticesNavLinks.find(
      ({ to }) => to === currentLocationPath
    );
    setCategory(category);
    setLabel(label);
  }, [noticesNavLinks, currentLocationPath]);

  const { data, error, isLoading, isFetching } = useGetNoticesQuery({
    category,
  });

  if (!data) {
    return;
  }

  const { result: pets } = data;

  console.log(pets);

  // Temporary useEffect -> mockAPI
  // useEffect(() => {
  //   const getPets = async () => {
  //     const response = await axios.get(
  //       'https://641493898dade07073c3d8df.mockapi.io/api/pets/pets-list'
  //     );
  //     // console.log(response.data);
  //     setPets(response.data);
  //   };

  //   getPets();
  // }, []);

  return (
    <section>
      <Container>
        <NoticesCardList label={label} list={pets} isLoggedIn={isLoggedIn} />

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
