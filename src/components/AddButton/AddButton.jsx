import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import {
  AddButtonStyled,
  AddButtonText,
  IconContainer,
  IconWrapper,
  PlusIcon,
} from './AddButton.styled';

const AddButton = forwardRef((props, ref) => {
  const { label, onClick = null, hasMobileStyles = false } = props;

  return (
    <AddButtonStyled
      ref={ref}
      type="button"
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
});

export default AddButton;

AddButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  hasMobileStyles: PropTypes.bool,
};
