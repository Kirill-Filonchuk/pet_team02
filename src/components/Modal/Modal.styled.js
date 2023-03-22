import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);

  ${p => p.theme.mq.mobileOnly} {
    padding: 160px 20px 20px 20px;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};

  ${p => p.theme.mq.mobileOnly} {
    border-radius: ${p => p.theme.radii.small};
  }
`;
