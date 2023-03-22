import { GrFormClose } from 'react-icons/gr';
import styled from 'styled-components';
import { theme } from 'theme';

export const Card = styled('div').attrs(
  p =>
    p.freqProps && {
      style: {
        transformOrigin: `top ${p.freqProps.top} left ${p.freqProps.left}`,
        left: p.freqProps.left,
        top: p.freqProps.top,
        transform: `translate(${p.freqProps.transformX}, ${p.freqProps.transformY})`,
        borderRadius: `${p.freqProps.borderTL} ${p.freqProps.borderTR} ${p.freqProps.borderBR} ${p.freqProps.borderBL}`,
      },
    }
)`
  padding: 40px 20px 20px 20px;

  position: absolute;

  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};

  min-height: 150px;
  min-width: 280px;
  max-width: 450px;

  ${theme.mq.mobileOnly} {
    padding: 40px 16px 16px 20px;
    width: 280px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    border-radius: ${p => p.theme.radii.small};
  }

  animation-name: appearance-animation;
  animation-duration: 800ms;
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

export const CloseButton = styled('button')`
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;

  /* padding: 10px; */
  position: absolute;
  top: 5px;
  right: 5px;

  width: 30px;
  height: 30px;
`;

export const CloseIcon = styled(GrFormClose)`
  width: 100%;
  height: 100%;
`;
