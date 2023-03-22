import { ROUTES } from 'router';
import {
  LinkItem,
  LinksList,
  ShouldLoginWrapper,
  StyledLink,
} from './ShouldLogin.styled';

const ShouldLogin = () => {
  return (
    <ShouldLoginWrapper>
      <p>
        You need to <strong>Log in</strong> to use this functionality
      </p>
      <LinksList>
        <LinkItem>
          <StyledLink to={ROUTES.LOGIN}>Login</StyledLink>
        </LinkItem>
        <LinkItem>
          <StyledLink to={ROUTES.REGISTER}>Register</StyledLink>
        </LinkItem>
      </LinksList>
    </ShouldLoginWrapper>
  );
};

export default ShouldLogin;
