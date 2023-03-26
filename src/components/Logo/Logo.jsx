import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoStyle>
        <span>p</span>
        <span>e</span>
        <span style={{ color: '#F59256' }}>t</span>
        <span>l</span>
        <span>y</span>
      </LogoStyle>
    </Link>
  );
};
export const drop = keyframes`
 0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px) ;
  }
100% {
    transform: translateY(60px) ;
    opacity: 0;
  }
`;

export const LogoStyle = styled.p`
  display: inline-block;
  font-family: ${p => p.theme.fonts.poppins};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 42px;
  letter-spacing: 0.07em;
  /* z-index: 11; */
  transition-property: transform;
  transition-duration: 900ms;
  &:hover {
    transform: scale(1.1);
    &::after {
      content: 't';
      color: ${p => p.theme.colors.accent};
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      font-weight: bold;
      animation: ${drop} 0.5s linear forwards;
    }
  }
  ${p => p.theme.mq.tablet} {
    font-size: ${p => p.theme.fontSizes[7]}px;
    line-height: 48px;
  }
  ${p => p.theme.mq.desktop} {
    font-size: ${p => p.theme.fontSizes[7]}px;
    line-height: 48px;
  }
`;

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: black;
  z-index: 11;
  ${p => p.theme.mq.mob} {
    margin-right: 158px;
  }
  ${p => p.theme.mq.tablet} {
    // margin-right: 100px;
  }
  ${p => p.theme.mq.desktop} {
    margin-right: 80px;
  }
`;