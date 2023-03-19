import styled from 'styled-components';
import { theme } from 'theme';

export const NoticesWrapper = styled('div')`
  padding-top: 40px;
  padding-bottom: 100px;

  ${theme.mq.tablet} {
    padding-top: 90px;
    padding-bottom: 200px;
  }

  ${theme.mq.desktop} {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;

export const NoticeSection = styled('section')`
  margin-bottom: 30px;

  ${theme.mq.tablet} {
    margin-bottom: 60px;
  }
`;

export const Title = styled('h1')`
  margin: 0;
  margin-bottom: 30px;

  text-align: center;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.375;
  color: ${p => p.theme.colors.black};

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;

export const NoticesToolBar = styled('div')`
  display: flex;
  justify-content: space-between;
`;
