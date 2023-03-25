import styled from 'styled-components';
import { theme } from 'theme';
import { Button } from 'components/UIKit/Button/Button.styled';

export const AddPetWrapper = styled('div')`
  width: 280px;
  padding: 18px 40px;

  ${theme.mq.tablet} {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const Title = styled('h1')``;

export const Description = styled('p')``;

export const CategoryList = styled('ul')``;

export const CategoryItem = styled('li')``;

export const CategoryLabel = styled('label')``;

export const CategoryRadio = styled('input')``;

export const Form = styled('form')``;

export const Label = styled('label')``;

export const Input = styled('input')``;

export const ToolBar = styled('div')``;

export const ModalButton = styled(Button)``;
