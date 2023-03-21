import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RxDotsHorizontal } from 'react-icons/rx';

const TYPE = {
  ARROW: 'arrow',
  CURRENT: 'current',
  DOTS: 'dots',
};

export const PREV_BTN = currentPage => ({
  title: '',
  value: currentPage - 1,
  type: TYPE.ARROW,
  Icon: BsChevronLeft,
});

export const NEXT_BTN = currentPage => ({
  title: '',
  value: currentPage + 1,
  type: TYPE.ARROW,
  Icon: BsChevronRight,
});

export const PAGE_BTN = page => ({ title: page, value: page });

export const CURRENT_PAGE_BTN = currentPage => ({
  title: currentPage,
  value: currentPage,
  type: TYPE.CURRENT,
});

export const LEFT_DOTS_BTN = currentPage => ({
  title: '',
  value: currentPage - 4,
  type: TYPE.DOTS,
  Icon: RxDotsHorizontal,
});

export const RIGHT_DOTS_BTN = currentPage => ({
  title: '',
  value: currentPage + 4,
  type: TYPE.DOTS,
  Icon: RxDotsHorizontal,
});

export const LAST_PAGE_BTN = page => ({ title: 'Last', value: page });
