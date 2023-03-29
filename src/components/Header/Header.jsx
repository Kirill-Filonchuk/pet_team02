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
  LinkAuth,
  AuthNavigateTablet,
  LinkAuthTablet,
  LinkAuthAccaunt,
} from './Header.styled';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Logo } from '../Logo/Logo';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Account from 'components/Account/Account';
import { ReactComponent as AccountIcon } from '../../images/home/svg/account.svg';

export const Header = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
    !isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  };

  return (
    <HeaderStyle>
      <HeaderContainer>
        <Logo />
        <Nav />
        {isLoggedin ? (
          <Account />
        ) : (
          <AuthNavigateTablet>
            <LinkAuthTablet to="/login" style={{ width: 111 }}>
              Login
            </LinkAuthTablet>
            <LinkAuthTablet to="/register" style={{ width: 181 }}>
              Registation
            </LinkAuthTablet>
          </AuthNavigateTablet>
        )}
        <MenuBtn onClick={toggle}>
          {isOpen ? <GrClose size={30} /> : <HiMenu size={40} />}
        </MenuBtn>
        {isOpen && (
          <Burger>
            <ListMenu>
              {isLoggedin ? (
                <AuthNavigate>
                  <LinkAuthAccaunt
                    to="/user"
                    onClick={toggle}
                    style={{ width: 164 }}
                  >
                    <AccountIcon style={{ marginRight: 12 }} /> Account
                  </LinkAuthAccaunt>
                </AuthNavigate>
              ) : (
                <AuthNavigate>
                  <LinkAuth to="/login" onClick={toggle} style={{ width: 95 }}>
                    Login
                  </LinkAuth>
                  <LinkAuth
                    to="/register"
                    onClick={toggle}
                    style={{ width: 144 }}
                  >
                    Registation
                  </LinkAuth>
                </AuthNavigate>
              )}

              <Link to="/news" onClick={toggle}>
                News
              </Link>
              <Link to="/notices" onClick={toggle}>
                Find pet
              </Link>
              <Link to="/friends" onClick={toggle}>
                Our friends
              </Link>
            </ListMenu>
          </Burger>
        )}
      </HeaderContainer>
    </HeaderStyle>
  );
};
