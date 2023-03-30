import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from '../Container';
import NoticesPaginatedList from 'components/NoticesPaginatedList';
import useAuth from 'hooks/useAuth/useAuth';
import ErrorMessage from 'components/UIKit/ErrorMessage';
import {
  useGetNoticesQuery,
  useGetUserDataQuery,
  useUpdateNoticeFavoriteStatusMutation,
} from 'redux/notices/noticesApi';
import { updatedPetList } from './utils/updatePetList';
import { StorageService } from 'Services/storageService';

const ITEMS_PER_PAGE = 8;
const queryStorage = new StorageService('query');

const NoticesCategoriesList = () => {
  const { noticesNavLinks, query = '' } = useOutletContext();
  const { pathname: currentLocationPath } = useLocation();

  const [label, setLabel] = useState();
  const [page, setPage] = useState(
    () => queryStorage.getStorageValue()?.page ?? 1
  );
  const [endpoint, setEndpoint] = useState();
  const { isLoggedIn } = useAuth();

  const [updateFavoriteStatus] = useUpdateNoticeFavoriteStatusMutation();

  useEffect(() => {
    const { label, endpoint, to } = noticesNavLinks.find(
      ({ to }) => to === currentLocationPath
    );

    const storageRoute = queryStorage.getStorageValue()?.route;
    if (storageRoute !== to) {
      setPage(1);
    }

    queryStorage.setStorageValue({ route: to, page: page });

    setEndpoint(endpoint);
    setLabel(label);
  }, [noticesNavLinks, currentLocationPath, page]);

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
