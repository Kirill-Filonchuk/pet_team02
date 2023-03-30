import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { PagButton, PagItem, PagList } from './Paginator.styled';
import { calculatePagination } from '../helpers/calculatePagination';

const Paginator = ({
  totalItems,
  currentPage = 1,
  onPageClick,
  perPage = 8,
  nearbyQtyPages = 1,
  shouldScrollUp = false,
}) => {
  useEffect(() => {
    if (shouldScrollUp) {
      window.scrollTo(0, 0);
    }
  });

  if (totalItems <= perPage) {
    return;
  }

  const lastPageNumber = Math.ceil(Number(totalItems) / Number(perPage));
  const calculationList = calculatePagination(
    currentPage,
    lastPageNumber,
    nearbyQtyPages
  );

  return (
    <PagList>
      {calculationList.map(({ title, value, type, Icon }) => (
        <PagItem key={nanoid(5)}>
          <PagButton
            type={type}
            onClick={() => {
              onPageClick(value);
            }}
          >
            {title}
            {Icon && <Icon />}
          </PagButton>
        </PagItem>
      ))}
    </PagList>
  );
};

export default Paginator;

Paginator.propTypes = {
  totalItems: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  onPageClick: PropTypes.func.isRequired,
  perPage: PropTypes.number,
  nearbyQtyPages: PropTypes.number,
};
