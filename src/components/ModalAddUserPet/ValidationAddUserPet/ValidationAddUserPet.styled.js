import styled from 'styled-components';
import { theme } from '../../../theme';

const Error = styled.div`
  /* position: absolute; */
  margin-top: 5px;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 10px;
  color: red;
  /* top:74px; */
  /* bottom: -10px; */

  /* top: ${p => p.comment && p.step === 2 && '134px'}; */

  ${theme.mq.tablet} {
    /* top:94px; */
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
