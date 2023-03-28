import { Oval } from 'react-loader-spinner';

const OvalSpinner = ({ size }) => {
  return (
    <Oval
      height={size}
      width={size}
      color="#F59256"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#FDF7F2"
      strokeWidth={10}
      strokeWidthSecondary={10}
    />
  );
};

export default OvalSpinner;
