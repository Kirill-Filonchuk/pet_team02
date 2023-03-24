import styled from 'styled-components';

export const EscButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 9px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.round};
  border: none;

  transition-property: color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }

  ${p => p.theme.mq.tablet} {
    width: 44px;
    height: 44px;
    padding: 12px;
  }
`;
