import styled, { css } from 'styled-components';
import { Button } from 'components/UIKit/Button/Button.styled';

export const Article = styled('article')`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border-bottom-left-radius: ${p => p.theme.radii.small};
  border-bottom-right-radius: ${p => p.theme.radii.small};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`;

export const ImageWrapper = styled('div')``;

export const Image = styled('img')`
  display: block;
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const Meta = styled('div')`
  padding: 20px 20px 12px;
`;

export const Title = styled('h2')`
  margin: 0;
  margin-bottom: 20px;

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 28px;
  line-height: 1.357;
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.black};
`;

export const Table = styled('table')`
  margin-bottom: 20px;

  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.375;
  color: ${p => p.theme.colors.black};
`;

export const Tr = styled('tr')`
  ${p =>
    p.isPrice &&
    !p.hasPrice &&
    css`
      opacity: 0;
    `}

  & > td:first-child, & > td:last-child {
    padding-bottom: 8px;
  }
  &:last-child > td:first-child,
  &:last-child > td:last-child {
    padding-bottom: 0;
  }
`;

export const Td = styled('td')`
  &:first-child {
    padding-right: 40px;
  }
  &:nth-last-child(-n + 2) {
    padding-bottom: 0;
  }
`;

export const BtnWrapper = styled('div')`
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 12px;
`;

export const NoticeCardButton = styled(Button)`
  border: 2px solid
    ${p => (p.isDelete ? p.theme.colors.accentActive : p.theme.colors.accent)};

  &:hover {
    background-color: ${p =>
      p.isDelete ? p.theme.colors.accentActive : p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  &:disabled {
    background-color: transparent;
    border-color: #ebe6e6;
    color: #ebe6e6;

    &:hover {
      background-color: transparent;
      color: #ebe6e6;
    }
  }
`;

export const Label = styled('div')`
  position: absolute;
  left: 0;
  top: 20px;

  height: 28px;
  width: 158px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;

  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  letter-spacing: 0.04em;
  color: #111111;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const Favorite = styled('button')`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;
`;
