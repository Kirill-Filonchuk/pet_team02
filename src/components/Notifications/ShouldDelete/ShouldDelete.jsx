import PropTypes from 'prop-types';
import {
  ButtonItem,
  ButtonList,
  NoButton,
  ShouldDeleteWrapper,
  StyledButton,
  YesButton,
} from './ShouldDelete.styled';

const ShouldDelete = ({ onDelete, onClose }) => {
  return (
    <ShouldDeleteWrapper>
      <p>
        Are you sure, you want to <strong>delete</strong> this notice?
      </p>

      <ButtonList>
        <ButtonItem>
          <YesButton
            onClick={() => {
              onDelete();
              onClose();
            }}
            type="button"
          >
            Yes
          </YesButton>
        </ButtonItem>
        <ButtonItem>
          <NoButton
            onClick={() => {
              onClose();
            }}
            type="button"
          >
            No
          </NoButton>
        </ButtonItem>
      </ButtonList>
    </ShouldDeleteWrapper>
  );
};

export default ShouldDelete;

ShouldDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
