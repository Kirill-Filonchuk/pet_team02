import styled, {keyframes} from 'styled-components';
import {theme} from '../../../theme';

const ToTop = styled.div`
position: relative;
`
const pulls = keyframes `
from{
 transform:scale(1);
    opacity:1;
  }
  to{
    opacity: 0.5;
    transform:scale(1.2);
  }
`
const Icon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid ${theme.colors.accent};
  opacity: 0.5;
  border-radius: 50%;
  z-index: 20;
  width: 28px;
  height: 28px;
  transition: 0.3s;  
  animation: ${pulls} 2s ease-out infinite normal;
  ${theme.mq.tablet} {
    width: 40px;
    height: 40px;
}

  & svg {
    position: absolute;
    color: ${theme.colors.accent};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
  }
  &:hover {
  cursor: pointer;
  animation-play-state: paused;
  opacity: 1;
  box-shadow: 0 0 5px ${theme.colors.accent};
  }
`
export {Icon, ToTop};