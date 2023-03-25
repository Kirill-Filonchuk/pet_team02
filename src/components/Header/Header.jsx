import React, { useState } from 'react';
import {
  HeaderStyle,
  MenuBtn,
  Link,
  Burger,
  ListMenu,
  Block,
  AuthNavigate,
  LinkAuth,
  AuthNavigateTablet,
  LinkAuthTablet,
} from './Header.styled';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Logo } from '../Logo/Logo';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import Account from 'components/Account/Account';
import { ReactComponent as AccountIcon } from '../../images/home/svg/account.svg'
import { ButtonBurger } from 'components/Account/Account.styled';
import { PageList } from './PageList';


export const Header = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);

  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  const close = () => {
    setOpen(false)
  }

  return (<>
    <HeaderStyle>
      <Logo />
        <PageList/>
      <Block>
        {isLoggedin ? (
          <Account />
        ) : (
          <AuthNavigateTablet>
            <LinkAuthTablet to="/login" onClick={close}>Login</LinkAuthTablet>
            <LinkAuthTablet to="/register" onClick={close}>Registation</LinkAuthTablet>
          </AuthNavigateTablet>
        )}

        <MenuBtn onClick={toggle}>
          {isOpen ? <GrClose size={30} /> : <HiMenu style={{ padding: 0 }} size={30} />}
        </MenuBtn>
      </Block>
    </HeaderStyle>
    {isOpen && (
      <Burger>
        <ListMenu>
          {isLoggedin ? (
            <ButtonBurger to="/user" onClick={close} >
              <AccountIcon style={{ marginRight: 12 }} /> Account
            </ButtonBurger>
          ) : (
            <AuthNavigate style={{ marginBottom: 20 }}>
              <LinkAuth to="/login" onClick={toggle}>
                Login
              </LinkAuth>
              <LinkAuth to="/register" onClick={toggle}>
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
            Friends
          </Link>
        </ListMenu>
      </Burger>
    )}
  </>
  );
};
