import styled from 'styled-components';
import { theme } from 'theme';

export const StyledTempContainer = styled('div')`
  margin: 0 auto;
  width: 100%;

  padding-right: 20px;
  padding-left: 20px;

  ${theme.mq.mobileOnly} {
    max-width: 320px;
  }

  ${theme.mq.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  ${theme.mq.desktop} {
    width: 1280px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;
