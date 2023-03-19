import styled from 'styled-components';

export const Button = styled('button')`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  margin: 0;
  padding: 0;
  background-color: transparent;

  padding: 6px 0;
  width: ${({ width }) => (width ? width : '100%')};

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${p => (p.color ? p.color : p.theme.colors.accent)};

  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
