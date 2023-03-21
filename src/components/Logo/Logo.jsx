import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <LogoStyle>
          <span>pe</span>
          <span style={{ color: '#F59256' }}>t</span>
          <span>ly</span>
        </LogoStyle>
      </Link>
    </>
  );
};

const LogoStyle = styled.p`
  display: inline-block;
  font-family: ${p => p.theme.fonts.poppins};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 42px;
  letter-spacing: 0.07em;

  transition-property: transform;
  transition-duration: 500ms;
  &:hover {
    transform: scale(1.5);
  }

  ${p => p.theme.mq.tablet} {
    font-size: ${p => p.theme.fontSizes[7]}px;
    line-height: 48px;
  }
  ${p => p.theme.mq.desktop} {
    /* margin-right: 80px; */
    font-size: ${p => p.theme.fontSizes[7]}px;
    line-height: 48px;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  ${p => p.theme.mq.mob} {
    margin-right: 158px;
  }
  ${p => p.theme.mq.tablet} {
    margin-right: 246px;
  }
  ${p => p.theme.mq.desktop} {
    margin-right: 80px;
  }
`;
