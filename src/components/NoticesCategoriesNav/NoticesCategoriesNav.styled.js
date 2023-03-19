import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'theme';

export const Wrapper = styled('nav')`
  ${theme.mq.tabletOnly} {
    flex-basis: 500px;
  }
`;

export const List = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 12px;
`;

export const Item = styled('li')``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;

  padding: 6px 28px;

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};

  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};

  transition-property: color, background-color;
  transition-duration: ${p => p.theme.transitions.durations.default};
  transition-timing-function: ${p => p.theme.transitions.functions.default};

  &.active,
  &:hover {
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid ${p => p.theme.colors.accent};
  }

  ${theme.mq.tablet} {
    padding: 8px 28px;
    font-size: 20px;
  }
`;
