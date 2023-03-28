import styled from 'styled-components';

export const Loader = styled('span')`
  width: 100%;
  /* height: 4.8px; */
  height: 3px;
  display: inline-block;
  position: relative;
  /* background: rgba(255, 255, 255, 0.15); */
  background: rgba(245, 146, 86, 0.15);
  overflow: hidden;

  &::after {
    content: '';
    /* width: 192px; */
    width: 100%;
    height: 4.8px;
    /* background: #fff; */
    background: ${p => p.theme.colors.accent};
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    /* animation: animloader 1500ms linear infinite; */
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
