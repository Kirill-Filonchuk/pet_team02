import styled from 'styled-components';
import { theme } from '../../../theme';

const Error = styled.p`
  position: absolute;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 10px;
  color: red;
  top: ${p => (p.name === 'Comment is correct' && p.step === 2 ? "163px" : "75px")};;
  
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[1] + 'px'};
    top: ${p => (p.name !== 'comment' && p.step === 1 ? "93px" : "136px")};
    top: ${p => (p.name === 'comment' && p.step === 2 ? "163px" : "136px")};
    /* top: ${p => (p.name === 'photo' && p.step === 2 ? "163px" : "120%")}; */
  }
  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes[2] + 'px'};
  }
`;

const Correct = styled(Error)`
position: absolute;
top: 136px;
top: ${p => (p.name !== 'Comment is correct' && p.step === 1 ? "136px" : "75px")};;
top: ${p => (p.name === 'Comment is correct' && p.step === 2 ? "136px" : "75px")};;
  color: green;
  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes[1] + 'px'};
    top: ${p => (p.name === 'Comment is correct' && p.step === 2 ? "163px" : "75px")};
    /* top: ${p => (p.name === 'Photo is correct' && p.step === 2 ? "163px" : "120%")}; */
  }

`;

export { Error, Correct };
