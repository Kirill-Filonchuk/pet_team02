import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled('div')`
  height: 100%;
  font-size: 20px;
  line-height: 1.375;

  ${theme.mq.mobileOnly} {
    font-size: 18px;
  }
`;
