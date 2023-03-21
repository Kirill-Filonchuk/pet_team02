import Notify from 'components/Notify';
import { useNotifyPosition } from 'hooks/useNotifyPosition';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  AddButtonStyled,
  AddButtonText,
  IconContainer,
  IconWrapper,
  PlusIcon,
} from './AddButton.styled';

const AddButton = ({
  label,
  onClick = null,
  hasMobileStyles = false,
  isLoggedIn,
}) => {
  const [isNotifyOpen, setIsnotifyOpen] = useState();
  const { buttonRef, position } = useNotifyPosition();

  const onClickHandler = () => {
    isLoggedIn ? onClick() : setIsnotifyOpen(true);
  };

  return (
    <>
      <AddButtonStyled
        ref={buttonRef}
        type="button"
        className="addButtonWrapper"
        hasMobileStyles={hasMobileStyles}
        onClick={onClickHandler}
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

      {isNotifyOpen && (
        <Notify
          position={position}
          onClose={() => {
            setIsnotifyOpen(false);
          }}
        >
          <p>Please login </p>
        </Notify>
      )}
    </>
  );
};

export default AddButton;

AddButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  hasMobileStyles: PropTypes.bool,
};
