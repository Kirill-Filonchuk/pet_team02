// import NoticesCardList from '../NoticesCardList';
import Container from '../Container';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import Paginator from 'components/Paginator';
// import { useWindowSize } from 'hooks/useWindowSize';
import {
  useGetFavoritesQuery,
  useGetNoticesQuery,
  useGetOwnNoticesQuery,
  useUpdateNoticeFavoriteStatusMutation,
} from 'redux/notices/noticesApi';
import useAuth from 'hooks/useAuth/useAuth';
import NoticesPaginatedList from 'components/NoticesPaginatedList';
// import { useDispatch } from 'react-redux';
// import { refreshUser } from 'redux/auth/operations';

const ITEMS_PER_PAGE = 8;

const NoticesCategoriesList = () => {
  const noticesNavLinks = useOutletContext();
  const { pathname: currentLocationPath } = useLocation();

  const [label, setLabel] = useState();
  const [page, setPage] = useState(1);
  const [endpoint, setEndpoint] = useState();
  // const { isLoggedIn, user } = useAuth();
  const { isLoggedIn } = useAuth();
  // const dispatch = useDispatch();

  const [updateFavoriteStatus] = useUpdateNoticeFavoriteStatusMutation();

  useEffect(() => {
    const { label, endpoint } = noticesNavLinks.find(
      ({ to }) => to === currentLocationPath
    );
    setEndpoint(endpoint);
    setLabel(label);
  }, [noticesNavLinks, currentLocationPath]);

  const { data, error } = useGetNoticesQuery(
    {
      endpoint,
      page: page,
      limit: ITEMS_PER_PAGE,
    },
    { skip: endpoint ? false : true }
  );

  const { data: favoritesData } = useGetFavoritesQuery(null, {
    skip: !isLoggedIn,
  });
  const favorites = favoritesData?.result.map(({ _id }) => _id);

  const { data: ownsData } = useGetOwnNoticesQuery(null, {
    skip: !isLoggedIn,
  });
  const owns = ownsData?.result.map(({ _id }) => _id);

  const onFavoriteClickHandler = async id => {
    try {
      await updateFavoriteStatus(id);
      // const response = await updateFavoriteStatus(id);

      // if (response.data.result) {
      //   dispatch(refreshUser());
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const updatedPetList = (list, favorites, owns) => {
    return list?.map(item => ({
      ...item,
      isFavorite: favorites?.includes(item._id) ? true : false,
      isMine: owns?.includes(item._id) ? true : false,
    }));
  };

  const pets =
    isLoggedIn && data
      ? updatedPetList(data.result, favorites, owns)
      : data?.result;

  // const pets =
  //   isLoggedIn && data
  //     ? updatedPetList(data.result, user.favorite, owns)
  //     : data?.result;

  console.log(data);

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
            totalItems={43}
            currentPage={page}
            onPageClick={page => {
              console.log(page);
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
