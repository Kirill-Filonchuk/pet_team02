import AddButton from 'components/AddButton';
import { Wrapper } from './AddNoticeButton.styled';

const AddNoticeButton = () => {
  return (
    <Wrapper>
      <AddButton label="Add pet" hasMobileStyles />
    </Wrapper>
  );
};

export default AddNoticeButton;
