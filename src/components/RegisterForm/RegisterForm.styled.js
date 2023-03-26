import styled from 'styled-components';
import { BtnFormSubmit } from 'components/LoginForm/LoginForm.styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../src/theme';

const ButtonBack = styled(BtnFormSubmit)`
  width: 100%;
  margin: 12px 0 40px 0;
  color: ${theme.colors.black};
  background-color: transparent;
`;

const LinkToLogin = styled(NavLink)`
  color: ${theme.colors.blueLinks};
  text-decoration: underline;
`;

export { ButtonBack, LinkToLogin };
