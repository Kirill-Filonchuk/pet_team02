import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.ul`
  ${p => p.theme.mq.desktop} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-decoration: none;
  }
  ${p => p.theme.mq.notDesktop} {
    display: none;
  }
`;
export const Wrapp = styled.li`
  ${p => p.theme.mq.desktop} {
    text-align: center;
    margin-right: 80px;
    padding-top: 10px;
    padding-bottom: 11px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
export const Link = styled(NavLink)`
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: ${p => p.theme.fonts.manrope};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-style: normal;
  line-height: 27px;
  letter-spacing: 0.04em;
  transition-property: color, transform;
  transition-duration: ${p => p.theme.transitions.durations.default};

  &.active {
    color: #f59256;
  }
  &:hover {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.1);
  }
`;
