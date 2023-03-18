import styled from 'styled-components';

export const List = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 32px;
  }

  /* @media screen and (min-width: 1280px) {
  } */
`;

export const Item = styled('li')`
  width: 100%;
  margin-bottom: 32px;

  /* border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07); */

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 96px) / 4);
  }
`;
