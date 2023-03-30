import styled from 'styled-components';
import { theme } from '../../../theme';

const Error = styled.div`
  margin-top: 5px;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 10px;
  color: red;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[1] + 'px'};
  }

  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[2] + 'px'};
  }
`;

const Correct = styled(Error)`
  color: green;
`;

export { Error, Correct };
