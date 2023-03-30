import styled from 'styled-components';
import { theme } from 'theme';

export const PaginatorWrapper = styled('div')`
  margin-top: 70px;
`;

export const ListContainer = styled('div')`
  position: relative;
`;

export const LoaderBox = styled('div')`
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;

  ${theme.mq.mobileOnly} {
    top: -25px;
  }
`;

export const NotFound = styled('p')`
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.accentActive};
`;
