import Spinner from 'components/Helpers/Spinner';
import useAuth from '../../../hooks/useAuth/useAuth';
import { ButtonBack, LinkToLogin } from './NavigationForm.styled';
import { BtnFormSubmit, TextLink } from 'components/LoginForm/LoginForm.styled';

const FormNavigation = props => {
  const { isRefreshing } = useAuth();
  return (
    <>
      {isRefreshing ? (
        <Spinner />
      ) : (
        <BtnFormSubmit
          style={{ marginTop: 2, marginBottom: props.isLastStep ? 0 : 40 }}
          type="submit"
          name="register"
        >
          {props.isLastStep ? 'Register' : 'Next'}
        </BtnFormSubmit>
      )}

      {props.hasPrevious && !isRefreshing ? (
        <ButtonBack type="button" name="back" onClick={props.onBackClick}>
          Back
        </ButtonBack>
      ) : null}

      <TextLink>
        <span>Already have an account? </span>
        <LinkToLogin to="/login">Login</LinkToLogin>
      </TextLink>
    </>
  );
};

export default FormNavigation;
