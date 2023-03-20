import styled from 'styled-components';
import { theme } from 'theme';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 20px 80px 20px;

  ${theme.mq.tablet} {
    align-items: start;
    padding: 0;
    padding-top: 88px;
    padding-bottom: 100px;
  }
  ${theme.mq.desktop} {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 58px 0px 40px 0px;
  }
`;

export const UserWrapper = styled.div`
  ${theme.mq.desktop} {
    position: sticky;
    top: 58px;
    margin-right: 32px;
  }
`;

export const PetsWrapper = styled.div`
  position: relative;
  width: 100%;
  ${theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  ${theme.mq.desktop} {
    display: block;
  }
`;
