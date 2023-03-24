import styled from 'styled-components';
import { theme } from 'theme';

export const List = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  ${theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 32px;
  }
`;

export const Item = styled('li')`
  width: 100%;
  margin-bottom: 12px;

  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding: 12px 5px 12px;

  box-shadow: 7px 4px 14px 0px #31150412;

  &:last-child {
    margin-bottom: 0;
  }

  ${theme.mq.tablet} {
    margin-bottom: 0;
    padding: 16px 5px 16px;
    border-radius: 40px;
    flex-basis: calc((100% - 32px) / 2);
  }

  ${theme.mq.desktop} {
    flex-basis: calc((100% - 64px) / 3);
  }
`;
