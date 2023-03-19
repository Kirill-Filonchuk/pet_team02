import {
  AddButtonStyled,
  AddButtonText,
  IconWrapper,
  PlusIcon,
} from './AddButton.styled';

const AddNoticeButton = ({ label, hasMobileStyles = false }) => {
  return (
    <AddButtonStyled
      className="addButtonWrapper"
      hasMobileStyles={hasMobileStyles}
    >
      <IconWrapper
        className="addButtonIconWrapper"
        hasMobileStyles={hasMobileStyles}
      >
        <PlusIcon className="addButtonIcon" hasMobileStyles={hasMobileStyles} />
      </IconWrapper>
      <AddButtonText
        className="addButtonText"
        hasMobileStyles={hasMobileStyles}
      >
        {label}
      </AddButtonText>
    </AddButtonStyled>
  );
};

export default AddNoticeButton;
