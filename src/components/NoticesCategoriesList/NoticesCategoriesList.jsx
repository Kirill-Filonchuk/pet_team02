import Container from '../Container';
import NoticesPaginatedList from 'components/NoticesPaginatedList';
import useAuth from 'hooks/useAuth/useAuth';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  useGetNoticesQuery,
  useGetUserDataQuery,
  useUpdateNoticeFavoriteStatusMutation,
} from 'redux/notices/noticesApi';
import { useStorage } from 'hooks/useStorage';
import { updatedPetList } from './utils/updatePetList';
import { ToastContainer } from 'react-toastify';
import ErrorMessage from 'components/UIKit/ErrorMessage';

const ITEMS_PER_PAGE = 8;

const NoticesCategoriesList = () => {
  const { getFromStorage, updateStorage } = useStorage('query');

  const { noticesNavLinks, query = '' } = useOutletContext();
  const { pathname: currentLocationPath } = useLocation();

  const [label, setLabel] = useState();
  const [page, setPage] = useState(() => getFromStorage()?.page ?? 1);
  const [endpoint, setEndpoint] = useState();
  const { isLoggedIn } = useAuth();

  const [updateFavoriteStatus] = useUpdateNoticeFavoriteStatusMutation();

  useEffect(() => {
    const { label, endpoint, to } = noticesNavLinks.find(
      ({ to }) => to === currentLocationPath
    );

    const storageRoute = getFromStorage()?.route;
    if (storageRoute !== to) {
      setPage(1);
    }

    updateStorage({ route: to, page: page });

    setEndpoint(endpoint);
    setLabel(label);
  }, [
    noticesNavLinks,
    currentLocationPath,
    updateStorage,
    page,
    getFromStorage,
  ]);

  //GET NOTICES PER ENDPOINT (sell, lost-found, in-good-hands, favorites, own)

  const { data, error, isFetching } = useGetNoticesQuery(
    {
      endpoint,
      query,
      page: page,
      limit: ITEMS_PER_PAGE,
    },
    { skip: endpoint ? false : true }
  );

  const { data: userData } = useGetUserDataQuery(null, { skip: !isLoggedIn });

  //UPDATE FAVORITES HANDLER
  const onFavoriteClickHandler = async id => {
    try {
      await updateFavoriteStatus(id);
    } catch (error) {
      console.log(error);
    }
  };

  //UPDATE PET LIST BEFORE RENDER
  const pets =
    isLoggedIn && data && userData
      ? updatedPetList(data.result, userData.favorite, userData.own)
      : data?.result;

  //GET TOTAL ITEM FOR PAGINATION
  const petsTotalItem = data?.total;

  return (
    <section>
      <Container>
        {error ? (
          <ErrorMessage timeout={4000}>
            Sorry! Something went wrong! Please, try again later.
          </ErrorMessage>
        ) : (
          <NoticesPaginatedList
            label={label}
            list={pets}
            isLoggedIn={isLoggedIn}
            onFavoriteClick={onFavoriteClickHandler}
            totalItems={petsTotalItem}
            currentPage={page}
            onPageClick={page => {
              setPage(page);
            }}
            perPage={ITEMS_PER_PAGE}
            isFetching={isFetching}
          />
        )}
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default NoticesCategoriesList;
