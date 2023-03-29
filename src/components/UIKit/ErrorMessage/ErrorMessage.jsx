import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'router';
import { Info, Text } from './ErrorMessage.styled';

const ErrorMessage = ({ children, timeout = 3000 }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(ROUTES.HOME);
    }, timeout);
  }, [navigate, timeout]);

  return (
    <div>
      <Text>{children}</Text>
      <Info>
        You will be redirected to homepage in {timeout / 1000} seconds
      </Info>
    </div>
  );
};

export default ErrorMessage;
