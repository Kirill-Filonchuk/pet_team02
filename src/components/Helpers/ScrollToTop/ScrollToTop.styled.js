import styled, {keyframes} from 'styled-components';
import {theme} from '../../../theme';

const ToTop = styled.div`
position: relative;
`
const pulls = keyframes `
0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
`
const Icon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid ${theme.colors.accent};
  background-color: ${theme.colors.accent};
  opacity: 0.7;
  border-radius: 50%;
  z-index: 20;
  width: 28px;
  height: 28px;
  transition: 0.3s;  
  animation: ${pulls} 3s ease-out infinite normal;
  ${theme.mq.tablet} {
    width: 40px;
    height: 40px;
}

  & svg {
    position: absolute;
    color: ${theme.colors.white};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
  }
  &:hover {
  cursor: pointer;
  animation-play-state: paused;
  opacity: 1
  }
`
export {Icon, ToTop};