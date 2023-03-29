import styled from 'styled-components';
import { theme } from 'theme';
import { GiCat } from 'react-icons/gi';

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
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  ${theme.mq.tablet} {
    margin-bottom: 28px;
    flex-basis: calc((100% - 32px) / 2);
  }

  ${theme.mq.desktop} {
    flex-basis: calc((100% - 64px) / 3);
  }
`;

export const IconContainer = styled('div')`
  display: flex;
  justify-content: center;
`;

export const CatIcon = styled(GiCat)`
  color: ${theme.colors.black};
  width: 20%;
  height: 20%;
`;
