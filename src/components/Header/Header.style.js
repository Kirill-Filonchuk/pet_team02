import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  background-color: ${p => p.theme.colors.background};
  ${p => p.theme.mq.desktop} {
    padding-right: 16px;
    padding-left: 16px;
  }
`;
export const HeaderStyle = styled.header`
  /* position: fixed; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%;
  height: 100%; */
  gap: 12px;
  padding: 8px 0;
`;

export const MenuBtn = styled.button`
  position: absolute;
  display: block;
  top: 1%;
  right: 6%;
  margin-top: 16px;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
  z-index: 11;
  background-color: transparent;
  border: ${p => p.theme.borders.none};

  ${p => p.theme.mq.desktop} {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  ${p => p.theme.mq.mob} {
    display: flex;
    text-align: center;
    margin-top: 40px;
    border-radius: 4px;
    text-decoration: none;
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.manrope};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes[7]}px;
    line-height: 44px;
    letter-spacing: 0.04em;
  }

  &.active:first-child {
    color: ${p => p.theme.colors.black};
    text-decoration-line: none;
  }
  &.active {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.accent};
    text-decoration-line: underline;
  }
  ${p => p.theme.mq.desktop} {
    display: hidden;
  }
`;
export const LinkAuth = styled(NavLink)`
  ${p => p.theme.mq.mob} {
    padding: 8px 28px;

    border: 2px solid #f59256;
    border-radius: ${p => p.theme.radii.normal};
    background-color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes[1]}px;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-family: ${p => p.theme.fonts.manrope};
    font-style: normal;
    line-height: 19px;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: ${p => p.theme.colors.black};
    &:first-child {
      margin-right: 12px;
    }
  }

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    text-decoration-line: underline;
  }
`;
export const Burger = styled.div`
  display: flex;
  align-content: center;
  background-color: #fdf7f2;

  ${p => p.theme.mq.desktop} {
    display: hidden;
  }
`;
export const MenuDesctop = styled.div`
  ${p => p.theme.mq.notDesktop} {
    display: hidden;
  }
`;

export const ListMenu = styled.nav`
  ${p => p.theme.mq.mob} {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 35px;
    /* pointer-events: none; */
    background-color: #fdf7f2;
    z-index: 10;
  }
`;
export const AuthNavigate = styled.div`
  /* position: absolute; */
  display: flex;
  /* top: 30%;
  right: 30%; */
  ${p => p.theme.mq.tabletOnly} {
    display: none;
  }
`;
export const AuthNavigateTablet = styled.div`
  ${p => p.theme.mq.mobileOnly} {
    display: none;
  }
  ${p => p.theme.mq.tablet} {
    position: absolute;
    top: 5%;
    right: 15%;
  }
`;
export const LinkAuthTablet = styled(NavLink)`
  padding: 8px 28px;

  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: ${p => p.theme.colors.white};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.manrope};
  font-style: normal;
  line-height: 19px;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  &:first-child {
    margin-right: 12px;
  }
`;
export const LogoStyle = styled.div`
  position: absolute;
  top: 2%;
  left: 3%;
`;
