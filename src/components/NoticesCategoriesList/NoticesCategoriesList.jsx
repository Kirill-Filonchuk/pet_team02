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
  const [endpoint, setEndpoint] = useState();

  useEffect(() => {
    const { label, endpoint } = noticesNavLinks.find(
      ({ to }) => to === currentLocationPath
    );
    setEndpoint(endpoint);
    setLabel(label);
  }, [noticesNavLinks, currentLocationPath]);

  //isLoading, error!!!!
  const { data } = useGetNoticesQuery(
    {
      endpoint,
    },
    { skip: endpoint ? false : true }
  );

  if (!data) {
    return;
  }

  const { result: pets } = data;

  console.log(pets);

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
