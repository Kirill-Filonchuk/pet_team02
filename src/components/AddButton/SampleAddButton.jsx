import AddButton from 'components/AddButton';
import styled from 'styled-components';

const Wrapper = styled('div')`
  //styles for common button container
  & .addButtonWrapper {
    column-gap: 30px;
    background-color: aqua;
  }

  //styles for circle wrapper for "+" button
  & .addButtonIconWrapper {
    width: 40px;
    height: 40px;
  }

  //styles for icon (color, sizes, etc...)
  & .addButtonIconContainer {
    color: green;
  }

  //styles for label text
  & .addButtonText {
    color: red;
  }
`;

const SampleAddButton = () => {
  return (
    <Wrapper>
      <AddButton label="Add pet" />
    </Wrapper>
  );
};

export default SampleAddButton;
