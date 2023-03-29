import styled from 'styled-components';
import { theme } from 'theme';

export const GradientContainer = styled('div')`
  margin-bottom: 4px;
  background: linear-gradient(0.25turn, #ff634e, #ffdf48);
  height: 4px;
  width: 200px;
  border-radius: 40px;

  ${theme.mq.tablet} {
    height: 8px;
    width: 280px;
  }

  ${theme.mq.desktop} {
    width: 340px;
  }
`;

export const Title = styled('h2')`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.37;
  margin-bottom: 16px;
`;

export const Description = styled('p')`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  font-size: 16px;
  line-height: 1.37;

  color: ${theme.colors.textNews};

  margin-bottom: 20px;

  ${theme.mq.tablet} {
    margin-bottom: 40px;
  }
`;

export const FooterContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const DateText = styled('p')`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.normal};
  font-size: 16px;
  line-height: 1.37;
  color: ${theme.colors.grey};
`;

export const Link = styled('a')`
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.37;

  text-decoration: underline;
  color: ${theme.colors.accent};

  transition: all 0.3s;
  &:hover {
    transform: scaleX(1.1);
  }
`;
