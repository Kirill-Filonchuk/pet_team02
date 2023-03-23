import React, { useState } from 'react';
import { Nav } from '../Navigation/Navigation';
import {
  HeaderStyle,
  MenuBtn,
  Link,
  Burger,
  ListMenu,
  HeaderContainer,
  AuthNavigate,
  LogoStyle,
  LinkAuth,
  AuthNavigateTablet,
  LinkAuthTablet,
} from './Header.styled';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <HeaderStyle>
      <HeaderContainer>
        <Logo />
        <Nav />
        <AuthNavigateTablet>
          <LinkAuthTablet to="/login">Login</LinkAuthTablet>
          <LinkAuthTablet to="/register">Registation</LinkAuthTablet>
        </AuthNavigateTablet>
        <MenuBtn onClick={toggle}>
          {isOpen ? <GrClose size={30} /> : <HiMenu size={40} />}
        </MenuBtn>
        {isOpen && (
          <Burger>
            <ListMenu>
              <LogoStyle onClick={toggle}>
                <Logo />
              </LogoStyle>
              <AuthNavigate style={{ marginBottom: 20 }}>
                <LinkAuth to="/login" onClick={toggle}>
                  Login
                </LinkAuth>
                <LinkAuth to="/register" onClick={toggle}>
                  Registation
                </LinkAuth>
              </AuthNavigate>
              <Link to="/news" onClick={toggle}>
                News
              </Link>
              <Link to="/notices" onClick={toggle}>
                Find pet
              </Link>
              <Link to="/friends" onClick={toggle}>
                Friends
              </Link>
            </ListMenu>
          </Burger>
        )}
      </HeaderContainer>
    </HeaderStyle>
  );
};
