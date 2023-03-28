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

  const { data, error } = useGetNoticesQuery(
    {
      endpoint,
      query,
      page: page,
      limit: ITEMS_PER_PAGE,
    },
    { skip: endpoint ? false : true }
  );

  // console.log(data);

  const { data: userData } = useGetUserDataQuery(null, { skip: !isLoggedIn });

  //UPDATE FAVORITES HANDLER
  const onFavoriteClickHandler = async id => {
    try {
      await updateFavoriteStatus(id);
    } catch (error) {
      console.log(error);
    }
  };

  //FUNCTION SET isFavorite AND isMine TO PET LIST
  const updatedPetList = (list, favorites, owns) => {
    return list?.map(item => ({
      ...item,
      isFavorite: favorites?.includes(item._id) ? true : false,
      isMine: owns?.includes(item._id) ? true : false,
    }));
  };

  //UPDATE PET LIST BEFORE RENDER
  const pets =
    isLoggedIn && data && userData
      ? updatedPetList(data.result, userData.favorite, userData.own)
      : data?.result;

  //GET TOTAL ITEM FOR PAGINATION
  const petsTotalItem = data?.total;

  // console.log(pets);

  return (
    <section>
      <Container>
        {error ? (
          <div>Sorry! Something went wrong</div>
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
          />
        )}
      </Container>
    </section>
  );
};

export default NoticesCategoriesList;
