import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

const OvalSpinner = ({
  size = 20,
  color = '#F59256',
  secondaryColor = '#FDF7F2',
}) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor}
      strokeWidth={10}
      strokeWidthSecondary={10}
    />
  );
};

export default OvalSpinner;

OvalSpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
};
