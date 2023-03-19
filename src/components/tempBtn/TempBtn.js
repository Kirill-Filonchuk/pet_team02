import AddButton from 'components/AddButton';
import styled from 'styled-components';

const Wrapper = styled('div')`
  & .addButtonWrapper {
    column-gap: 50px;
  }

  & .addButtonIconWrapper {
    width: 50px;
    height: 50px;
  }

  & .addButtonIcon {
    width: 10px;
    height: 10px;
  }

  & .addButtonText {
    font-size: 10px;
  }
`;

const TempBtn = () => {
  return (
    <Wrapper>
      <AddButton label="Add pet" />
    </Wrapper>
  );
};

export default TempBtn;
