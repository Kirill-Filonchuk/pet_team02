import styled from 'styled-components';

export const GradientContainer = styled('div')`
  margin-bottom: 4px;
  background: linear-gradient(0.25turn, #ff634e, #ffdf48);
  height: 4px;
  width: 200px;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    height: 8px;
    width: 280px;
  }

  @media screen and (min-width: 1280px) {
    width: 340px;
  }
`;

export const Title = styled('h2')`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
  line-height: 32.78px;
`;

export const Description = styled('p')`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 16px;
  line-height: 21.86px;

  color: #111321;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const FooterContainer = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const DateText = styled('p')`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 16px;
  line-height: 21.86px;
  color: rgba(17, 17, 17, 0.6);
`;

export const Link = styled('a')`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 21.86px;

  text-decoration: underline;
  color: #f59256;
`;
