import NoticesCardList from 'components/NoticesCardList';
import Paginator from 'components/Paginator';
import { Loader } from 'components/UIKit/Spinners/LineBarLoader/LineBarLoader.styled';
import { useWindowSize } from 'hooks/useWindowSize';
import { ProgressBar } from 'react-loader-spinner';
import {
  ListContainer,
  LoaderBox,
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
  return (
    list && (
      <ListContainer>
        {isFetching && (
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
    )
  );
};

export default NoticesPaginatedList;
