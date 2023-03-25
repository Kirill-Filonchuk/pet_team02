import styled from 'styled-components';

export const StyledBackdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 100%;
  overflow-y: auto;
  /* From https://css.glass */
  /* background: rgba(245, 146, 86, 0.2); */
  background: rgba(0, 0, 0, 0.2);
  /* background: rgba(255, 255, 255, 0.6); */
  /* border-radius: 16px; */
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5px);
  /* -webkit-backdrop-filter: blur(8.7px); */
  /* border: 1px solid rgba(245, 146, 86, 0.03); */

  /* background-color: transparent; */

  animation-name: appearance-animation;
  animation-duration: ${p => p.theme.transitions.durations.default};
  animation-timing-function: ${p => p.theme.transitions.functions.default};

  @keyframes appearance-animation {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
