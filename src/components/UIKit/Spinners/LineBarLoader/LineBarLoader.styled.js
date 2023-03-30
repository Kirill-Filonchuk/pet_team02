import styled from 'styled-components';

export const Loader = styled('span')`
  width: 100%;

  height: 3px;
  display: inline-block;
  position: relative;

  background: rgba(245, 146, 86, 0.15);
  overflow: hidden;

  &::after {
    content: '';

    width: 100%;
    height: 4.8px;

    background: ${p => p.theme.colors.accent};
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;

    animation: animloader 1500ms infinite;
    animation-timing-function: ${p => p.theme.transitions.functions.default};
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
