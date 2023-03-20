import styled from 'styled-components';

export const StyledBackdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* From https://css.glass */
  /* background: rgba(245, 146, 86, 0.2); */
  /* border-radius: 16px; */
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  /* backdrop-filter: blur(10px); */
  /* -webkit-backdrop-filter: blur(8.7px); */
  /* border: 1px solid rgba(245, 146, 86, 0.03); */

  background-color: transparent;
`;
