import PropTypes from 'prop-types';
import AddButton from 'components/AddButton';
import { Wrapper } from './AddNoticeButton.styled';

const AddNoticeButton = ({ onClick, isLoggedIn }) => {
  return (
    <Wrapper>
      <AddButton
        isLoggedIn={isLoggedIn}
        label="Add pet"
        hasMobileStyles
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default AddNoticeButton;

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};
