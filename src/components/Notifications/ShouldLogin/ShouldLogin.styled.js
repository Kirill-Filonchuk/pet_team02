import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'theme';
import { Wrapper } from '../Notifications.styled';

export const ShouldLoginWrapper = styled(Wrapper)`
  width: 400px;

  ${theme.mq.mobileOnly} {
    width: 100%;
  }

  ${theme.mq.tabletOnly} {
    width: 300px;
  }
`;

export const LinksList = styled('ul')`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;
`;

export const LinkItem = styled('li')`
  &:last-child::before {
    content: '/';
    margin-right: 12px;
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.accent};
`;
