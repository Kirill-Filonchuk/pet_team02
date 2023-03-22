import { Link } from 'react-router-dom';
import { ROUTES } from 'router';
import { ShouldLoginWrapper } from './Notifications.styled';

const ShouldLogin = () => {
  return (
    <ShouldLoginWrapper>
      <p>
        You need to <strong>Log in</strong> to use this functionality
      </p>
      <p>
        <Link to={ROUTES.LOGIN}>login</Link> /
        <Link to={ROUTES.REGISTER}>register</Link>
      </p>
    </ShouldLoginWrapper>
  );
};

export default ShouldLogin;
