import styled from 'styled-components';
import { theme } from 'theme';

export const Title = styled('h2')`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.37;
  margin-bottom: 16px;

  text-align: center;
  text-decoration: underline;

  color: ${theme.colors.accent};
`;

export const Image = styled('img')``;

export const FriendsContainer = styled('div')`
  display: flex;
`;

export const ContactContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled('a')`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.37;

  text-decoration: underline;
  // color: ${theme.colors.accent};
`;
