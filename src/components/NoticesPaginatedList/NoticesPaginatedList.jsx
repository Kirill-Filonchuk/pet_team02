import NoticesCardList from 'components/NoticesCardList';
import Paginator from 'components/Paginator';
import { Loader } from 'components/UIKit/Spinners/LineBarLoader/LineBarLoader.styled';
import { useWindowSize } from 'hooks/useWindowSize';
import { useEffect } from 'react';
import { useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { useDeleteNoticeMutation } from 'redux/notices/noticesApi';
import {
  ListContainer,
  LoaderBox,
  NotFound,
  PaginatorWrapper,
} from './NoticesPaginatedList.styled';

const NoticesPaginatedList = ({
  label,
  list,
  isLoggedIn,
  totalItems,
  currentPage,
  onPageClick,
  perPage,
  onFavoriteClick,
  isFetching,
}) => {
  const { isDesktop } = useWindowSize();

  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  // const [deleteNotice, { isLoading: isDeleting, error }] =
  //   useDeleteNoticeMutation();

  useEffect(() => {
    if (isFetching) {
      setIsSpinnerLoading(true);
      setTimeout(() => {
        setIsSpinnerLoading(false);
      }, 2000);
    }
  }, [isFetching]);

  if (!list) {
    return;
  }

  return list.length > 0 ? (
    <ListContainer>
      {isSpinnerLoading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}

      <NoticesCardList
        label={label}
        list={list}
        isLoggedIn={isLoggedIn}
        onFavoriteClick={onFavoriteClick}
      />

      <PaginatorWrapper>
        <Paginator
          totalItems={totalItems}
          currentPage={currentPage}
          onPageClick={onPageClick}
          nearbyQtyPages={isDesktop ? 2 : 1}
          perPage={perPage}
          // shouldScrollUp
        />
      </PaginatorWrapper>
    </ListContainer>
  ) : (
    <NotFound>Unfortunately we found nothing per you request</NotFound>
  );
};

export default NoticesPaginatedList;
