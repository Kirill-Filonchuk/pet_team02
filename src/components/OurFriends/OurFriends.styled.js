import styled from 'styled-components';
import { theme } from 'theme';

export const OurFriendsWrapper = styled('div')`
  padding-top: 40px;
  padding-bottom: 100px;

  ${theme.mq.tablet} {
    padding-top: 90px;
  }

  ${theme.mq.desktop} {
    padding-top: 70px;
    padding-bottom: 200px;
  }
`;
