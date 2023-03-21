import PropTypes from 'prop-types';
import AddButton from 'components/AddButton';
import { Wrapper } from './AddNoticeButton.styled';
import { forwardRef } from 'react';

const AddNoticeButton = forwardRef(({ onClick }, ref) => {
  return (
    <Wrapper>
      <AddButton ref={ref} label="Add pet" hasMobileStyles onClick={onClick} />
    </Wrapper>
  );
});

export default AddNoticeButton;

AddNoticeButton.propTypes = {
  onClick: PropTypes.func,
};
