import styled from 'styled-components';
import { BtnFormSubmit } from 'components/LoginForm/LoginForm.styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../src/theme';

const ButtonBack = styled(BtnFormSubmit)`
  width: 100%;
  margin-top: 0;
  margin-bottom: 40px;
  color: ${theme.colors.black};
  background-color: transparent;
`;

const ButtonRegister = styled(BtnFormSubmit)`
  margin-top: 4px;
  margin-bottom: 12px;
`;

const LinkToLogin = styled(NavLink)`
  color: ${theme.colors.blueLinks};
  text-decoration: underline;
`;

export { ButtonBack, LinkToLogin, ButtonRegister };
