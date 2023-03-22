import styled from 'styled-components';
import { theme } from 'theme';
import { Wrapper } from '../Notifications.styled';

export const ShouldDeleteWrapper = styled(Wrapper)`
  width: 400px;

  ${theme.mq.mobileOnly} {
    width: 100%;
  }

  ${theme.mq.tabletOnly} {
    width: 300px;
  }
`;

export const ButtonList = styled('ul')`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;

export const ButtonItem = styled('li')`
  &:last-child::before {
    content: '/';
    margin-right: 10px;
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledButton = styled('button')`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${p => p.theme.colors.accent};
`;

export const YesButton = styled(StyledButton)`
  color: ${p => p.theme.colors.accentActive};
`;

export const NoButton = styled(StyledButton)`
  font-weight: 700;
`;
