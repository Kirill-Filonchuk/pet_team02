import PropTypes from 'prop-types';
import {
  AddButtonStyled,
  AddButtonText,
  IconContainer,
  IconWrapper,
  PlusIcon,
} from './AddButton.styled';

const AddButton = ({ label, onClick = null, hasMobileStyles = false }) => {
  return (
    <AddButtonStyled
      className="addButtonWrapper"
      hasMobileStyles={hasMobileStyles}
    >
      <IconWrapper
        onClick={onClick}
        className="addButtonIconWrapper"
        hasMobileStyles={hasMobileStyles}
      >
        <IconContainer
          className="addButtonIconContainer"
          hasMobileStyles={hasMobileStyles}
        >
          <PlusIcon />
        </IconContainer>
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

export default AddButton;

AddButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  hasMobileStyles: PropTypes.bool,
};
