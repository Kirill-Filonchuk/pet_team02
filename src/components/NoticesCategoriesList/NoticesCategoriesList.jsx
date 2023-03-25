// import NoticesCardList from '../NoticesCardList';
import Container from '../Container';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import Paginator from 'components/Paginator';
// import { useWindowSize } from 'hooks/useWindowSize';
import { useGetNoticesQuery } from 'redux/notices/noticesApi';
import useAuth from 'hooks/useAuth/useAuth';
import NoticesPaginatedList from 'components/NoticesPaginatedList';

const ITEMS_PER_PAGE = 8;

const NoticesCategoriesList = () => {
  const { isLoggedIn } = useAuth();
  // const { isDesktop } = useWindowSize();

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
      page: page,
      limit: ITEMS_PER_PAGE,
    },
    { skip: endpoint ? false : true }
  );

  if (!data) {
    return;
  }

  const { result: pets } = data;

  console.log(data);

  return (
    <section>
      <Container>
        <NoticesPaginatedList
          label={label}
          list={pets}
          isLoggedIn={isLoggedIn}
          totalItems={43}
          currentPage={page}
          onPageClick={page => {
            console.log(page);
            setPage(page);
          }}
          perPage={ITEMS_PER_PAGE}
        />

        {/* <NoticesCardList label={label} list={pets} isLoggedIn={isLoggedIn} />

        <PaginatorWrapper>
          <Paginator
            totalItems={43}
            currentPage={page}
            onPageClick={page => {
              console.log(page);
              setPage(page);
            }}
            nearbyQtyPages={isDesktop ? 2 : 1}
            perPage={ITEMS_PER_PAGE}
            // shouldScrollUp
          />
        </PaginatorWrapper> */}
      </Container>
    </section>
  );
};

export default NoticesCategoriesList;
