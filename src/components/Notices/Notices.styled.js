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

export const NoticesToolBar = styled('div')`
  display: flex;
  justify-content: space-between;
`;
