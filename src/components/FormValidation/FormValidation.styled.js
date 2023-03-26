import styled from 'styled-components';
import { theme } from '../../theme';

const Error = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  left: 50%;
  top: 46px;
  transform: translateX(-50%);
  font-size: 10px;
  color: red;
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[1] + 'px'};
    top: 62px;
  }
  ${theme.mq.desktop} {
    top: 60px;
    font-size: ${theme.fontSizes[2] + 'px'};
  }
`;

const Correct = styled(Error)`
color: green;
`;

export { Error, Correct };
