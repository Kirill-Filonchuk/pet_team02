import PropTypes from 'prop-types';
import AddButton from 'components/AddButton';
import { Wrapper } from './AddNoticeButton.styled';

const AddNoticeButton = ({ onClick }) => {
  return (
    <Wrapper>
      <AddButton label="Add pet" hasMobileStyles onClick={onClick} />
    </Wrapper>
  );
};

export default AddNoticeButton;

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};
