import styled from 'styled-components';

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
  overflow-y: auto;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.white};

  ${p => p.theme.mq.tablet} {
    border-radius: ${p => p.theme.radii.normal};
  }
`;
