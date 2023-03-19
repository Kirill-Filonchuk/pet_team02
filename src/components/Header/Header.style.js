import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  background-color: #fdf7f2;
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
  cursor: pointer;
  z-index: 11;
  background-color: transparent;
  border: none;
  /* @media screen and (min-width: 600px) {
    top: 16px;
    right: 20px;
  } */
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const Link = styled(NavLink)`
  @media screen and (max-width: 1280px) {
    display: hidden;
  }
  /* position: relative; */
  display: flex;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  background-color: '#F59256';
  color: black;
  font-weight: 500;

  &.active {
    color: #f59256;
  }
`;
export const Burger = styled.div`
  display: flex;
  align-content: center;
  background-color: #fdf7f2;
  @media screen and (min-width: 1280px) {
    display: hidden;
  }
`;
export const MenuDesctop = styled.div`
  @media screen and (max-width: 1280px) {
    display: hidden;
  }
`;

export const ListMenu = styled.nav`
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
  /* pointer-events: none; */
  background-color: #fdf7f2;
  z-index: 10;
`;
export const AuthNavigate = styled.div`
  position: absolute;
  display: block;
  top: 30%;
  right: 30%;
`;
