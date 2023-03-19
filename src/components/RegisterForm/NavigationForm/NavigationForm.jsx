import { ButtonBack, LinkToLogin } from './NavigationForm.styled';
import { BtnFormSubmit, TextLink } from 'components/LoginForm/LoginForm.styled';

const FormNavigation = props => {
  return (
    <>
      <BtnFormSubmit
        style={{ marginTop: 2, marginBottom: props.isLastStep ? 0 : 40 }}
        type="submit"
        name="register"
      >
        {props.isLastStep ? 'Register' : 'Next'}
      </BtnFormSubmit>

      {props.hasPrevious && (
        <ButtonBack type="button" name="back" onClick={props.onBackClick}>
          Back
        </ButtonBack>
      )}

      <TextLink>
        <span>Already have an account? </span>
        <LinkToLogin to="/login">Login</LinkToLogin>
      </TextLink>
    </>
  );
};

export default FormNavigation;
