// import NoticesCardList from '../NoticesCardList';
import Container from '../Container';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import Paginator from 'components/Paginator';
// import { useWindowSize } from 'hooks/useWindowSize';
import {
  // useGetFavoritesQuery,
  useGetNoticesQuery,
  // useGetOwnNoticesQuery,
  useGetUserDataQuery,
  useUpdateNoticeFavoriteStatusMutation,
} from 'redux/notices/noticesApi';
import useAuth from 'hooks/useAuth/useAuth';
import NoticesPaginatedList from 'components/NoticesPaginatedList';
import { useStorage } from 'hooks/useStorage';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from 'redux/auth/operations';

const ITEMS_PER_PAGE = 8;

const NoticesCategoriesList = () => {
  const { getFromStorage, updateStorage } = useStorage('query');

  const noticesNavLinks = useOutletContext();
  const { pathname: currentLocationPath } = useLocation();

  const [label, setLabel] = useState();
  const [page, setPage] = useState(() => getFromStorage()?.page ?? 1);
  const [endpoint, setEndpoint] = useState();
  const { isLoggedIn } = useAuth();
  // const dispatch = useDispatch();

  const [updateFavoriteStatus] = useUpdateNoticeFavoriteStatusMutation();

  useEffect(() => {
    // updateStorage({ page: page });
    // console.log('ref', locationRef.current);
    // console.log('currentLocationPath', currentLocationPath);
    // if (locationRef.current !== currentLocationPath) {
    //   // updateStorage({ page: page });
    //   setPage(1);
    //   locationRef.current = currentLocationPath;
    // }
  }, [page, updateStorage, currentLocationPath]);

  useEffect(() => {
    const { label, endpoint, to } = noticesNavLinks.find(
      ({ to }) => to === currentLocationPath
    );

    const storageRoute = getFromStorage()?.route;
    if (storageRoute !== to) {
      setPage(1);
    }

    updateStorage({ route: to, page: page });
    // updateStorage({ route: to, page: storageRoute === to ? page : 1 });

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
      page: page,
      limit: ITEMS_PER_PAGE,
    },
    { skip: endpoint ? false : true }
  );

  // GET USER FAVORITE NOTICES
  // const { data: favoritesData } = useGetFavoritesQuery(null, {
  //   skip: !isLoggedIn,
  // });
  // const favorites = favoritesData?.result.map(({ _id }) => _id);

  //GET USER OWN NOTICES
  // const { data: ownsData } = useGetOwnNoticesQuery(null, {
  //   skip: !isLoggedIn,
  // });
  // const owns = ownsData?.result.map(({ _id }) => _id);

  const { data: userData } = useGetUserDataQuery(null, { skip: !isLoggedIn });

  //UPDATE FAVORITES HANDLER
  const onFavoriteClickHandler = async id => {
    try {
      // await updateFavoriteStatus(id);
      const response = await updateFavoriteStatus(id);

      console.log(response);
      // if (response.data.result) {
      //   dispatch(refreshUser());
      // }
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
  // const pets =
  //   isLoggedIn && data
  //     ? updatedPetList(data.result, favorites, owns)
  //     : data?.result;

  //GET TOTAL ITEM FOR PAGINATION
  const petsTotalItem = data?.total;

  // const pets =
  //   isLoggedIn && data
  //     ? updatedPetList(data.result, user.favorite, owns)
  //     : data?.result;

  // console.log(pets);

  // console.log('render');

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
