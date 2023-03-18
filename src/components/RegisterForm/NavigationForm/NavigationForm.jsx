import { StepOne, StepTwo, ButtonBack } from './NavigationForm.styled';
import { BtnFormSubmit, TextLink } from 'components/LoginForm/LoginForm.styled';

const FormNavigation = props => {
  return (
    <>
      <StepOne>
        <BtnFormSubmit style={{marginBottom: props.isLastStep ? 0:40}} type="submit" name="register">
          {props.isLastStep ? 'Register' : 'Next'}
        </BtnFormSubmit>
      </StepOne>

      {props.hasPrevious && (
        <StepTwo>
          <ButtonBack type="button" name="back" onClick={props.onBackClick}>
            Back
          </ButtonBack>
        </StepTwo>
      )}

      <TextLink>
        <span>Already have an account?</span>
        {/* <LinkToLogin to="/login">Login</LinkToLogin> */}
        <span> Login</span>
      </TextLink>
    </>
  );
};

export default FormNavigation;
