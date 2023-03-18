import styled, { css } from 'styled-components';

export const Article = styled('article')`
  position: relative;
  background-color: #ffffff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`;

export const ImageWrapper = styled('div')`
  /* width: 100%; */
`;

export const Image = styled('img')`
  display: block;
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const Meta = styled('div')`
  padding: 20px 20px 12px;
`;

export const Title = styled('h1')`
  margin: 0;
  margin-bottom: 20px;

  font-family: 'Manrope';
  font-weight: 700;
  font-size: 28px;
  line-height: 1.357;
  letter-spacing: -0.01em;
  color: #111111;
`;

export const Table = styled('table')`
  margin-bottom: 20px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  color: #111111;
`;

export const Tr = styled('tr')`
  ${p =>
    p.isPrice &&
    !p.hasPrice &&
    css`
      opacity: 0;
    `}

  & > td:first-child {
    padding-bottom: 8px;
  }
  &:last-child > td:first-child {
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

export const Button = styled('button')`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  margin: 0;
  padding: 0;
  background-color: transparent;

  padding: 6px 0;
  width: 100%;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #f59256;

  background: #ffffff;
  border: 2px solid ${({ isDelete }) => (isDelete ? '#FF6101' : '#f59256')};
  border-radius: 40px;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${({ isDelete }) => (isDelete ? '#FF6101' : '#f59256')};
    color: #ffffff;
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
