import { ButtonBack, LinkToLogin } from './NavigationForm.styled';
import { BtnFormSubmit, TextLink } from 'components/LoginForm/LoginForm.styled';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderUser } from 'components/PetsData/PetsData.styled';
import useAuth from '../../../hooks/useAuth/useAuth';

const FormNavigation = props => {
  const { isRefreshing } = useAuth();
  return (
    <>
    {isRefreshing ?  <LoaderUser>
                    <ThreeDots styles={{margin: '0 auto'}}
                    height="100"
                    width="100"
                    radius="9"
                    color={'rgb(245, 146, 86)'}
                  />
                  </LoaderUser> : <BtnFormSubmit
        style={{ marginTop: 2, marginBottom: props.isLastStep ? 0 : 40 }}
        type="submit"
        name="register"
      >
        {props.isLastStep ? 'Register' : 'Next'}
      </BtnFormSubmit>}
      
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
