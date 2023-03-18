import {
  AddButton,
  AddButtonText,
  IconWrapper,
  PlusIcon,
} from './AddNoticeButton.styled';

const AddNoticeButton = () => {
  return (
    <AddButton>
      <IconWrapper>
        <PlusIcon />
      </IconWrapper>
      <AddButtonText>Add pet</AddButtonText>
    </AddButton>
  );
};

export default AddNoticeButton;
