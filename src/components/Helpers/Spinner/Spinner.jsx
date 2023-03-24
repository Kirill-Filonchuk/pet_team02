import { ThreeDots } from 'react-loader-spinner';
import { SpinnerWrapper } from './Spinner.styled';
const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ThreeDots
      styles={{margin: '0 auto'}}
      height="100"
      width="100"
      radius="9"
      color={'rgb(245, 146, 86)'}
    />
    </SpinnerWrapper>
    
  );
};

export default Spinner;