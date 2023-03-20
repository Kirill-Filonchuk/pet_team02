import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <>
      <LogoStyle>
        <Link to="/">
          <span>pe</span>
          <span style={{ color: '#F59256' }}>t</span>
          <span>ly</span>
        </Link>
      </LogoStyle>
    </>
  );
};
const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const LogoStyle = styled.p`
  position: absolute;
  top: 2%;
  left: 3%;
  font-family: ${p => p.theme.fonts.poppins};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 42px;
  letter-spacing: 0.07em;
  margin: 0 auto;
  padding: 16px 20px;
  padding: 8px 16px;
  ${p => p.theme.mq.desktop} {
    position: absolute;
    top: 1%;
    left: 1%;
    font-size: ${p => p.theme.fontSizes[7]}px;
    line-height: 48px;
  }
`;
