import styled from 'styled-components';
import { theme } from 'theme';
export const Overlay = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;
export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 1200;
  top: 50%;
  left: 50%;
  width: 280px;
  /* max-height: 662px; */
  overflow-y: auto;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.white};
  ${p => p.theme.mq.tablet} {
    border-radius: ${p => p.theme.radii.normal};
  }
  ${theme.mq.tablet} {
    width: 608px;
    /* max-height: 662px; */
  }
  ${theme.mq.desktop} {
    max-width: 608px;
    /* max-height: 662px; */
  } ;
`;
