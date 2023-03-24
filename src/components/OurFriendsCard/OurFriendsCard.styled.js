import styled from 'styled-components';
import { theme } from 'theme';

export const TitleContainer = styled('div')`
  // min-height: 44px;
  margin-bottom: 10px;
  ${theme.mq.tablet} {
    margin-bottom: 16px;
    min-height: 44px;
  }
  ${theme.mq.desktop} {
    min-height: 54.8px;
  }
`;

export const TitleLink = styled('a')`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.bold};
  font-size: 16px;
  line-height: 1.37;

  display: block;
  text-align: center;
  text-decoration: underline;

  color: ${theme.colors.accent};

  transition: all 0.3s;

  &:hover {
    transform: scaleX(1.05);
  }
  ${theme.mq.tablet} {
    // margin-bottom: 16px;
  }
  ${theme.mq.desktop} {
    font-size: 20px;
  }
`;

export const Image = styled('img')`
  width: 110px;
  height: 78px;
  ${theme.mq.tablet} {
    width: 120px;
    height: 85px;
  }
  ${theme.mq.desktop} {
    width: 158px;
    height: 112px;
  }
`;

export const FriendsContainer = styled('div')`
  display: flex;
`;

export const ContactList = styled('ul')`
  margin-left: 12px;
  ${theme.mq.tablet} {
    margin-left: 14px;
  }
  ${theme.mq.desktop} {
    margin-left: 16px;
  }
`;
export const ContactItem = styled('li')`
  margin-bottom: 4px;
  &:last-child {
    margin-bottom: 0;
  }
  ${theme.mq.tablet} {
    margin-bottom: 8px;
  }
  ${theme.mq.desktop} {
    margin-bottom: 12px;
  }
`;

export const Link = styled('a')`
  display: block;
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.medium};
  font-size: 12px;
  line-height: 1.37;

  transition: all 0.3s;

  color: ${theme.colors.black};
  &:hover {
    color: ${theme.colors.accent};
    transform: scaleX(1.02);
  }
  ${theme.mq.tablet} {
    font-size: 14px;
  }
  ${theme.mq.desktop} {
    font-size: 16px;
  }
`;

export const Address = styled('span')`
  text-decoration: underline;
`;
