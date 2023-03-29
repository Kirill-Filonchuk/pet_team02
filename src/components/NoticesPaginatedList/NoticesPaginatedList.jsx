import NoticesCardList from 'components/NoticesCardList';
import Paginator from 'components/Paginator';
import { Loader } from 'components/UIKit/Spinners/LineBarLoader/LineBarLoader.styled';
import { useWindowSize } from 'hooks/useWindowSize';
import { useEffect } from 'react';
import { useState } from 'react';
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

  const [deleteNotice, { isLoading: isDeleting, error: deletingError }] =
    useDeleteNoticeMutation();

  useEffect(() => {
    if (isFetching) {
      setIsSpinnerLoading(true);
      setTimeout(() => {
        setIsSpinnerLoading(false);
      }, 2000);
    }
  }, [isFetching]);

  const onDeleteNotice = async id => {
    try {
      await deleteNotice(id);
    } catch (err) {
      console.log(err);
    }
  };

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
        onDeleteNotice={onDeleteNotice}
        isDeleting={isDeleting}
        deletingError={deletingError}
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
