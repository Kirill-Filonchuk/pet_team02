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
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  /* font-weight: 500; */
`;
const LogoStyle = styled.p`
  position: absolute;
  top: 1%;
  left: 0;
  font-weight: 700;
  margin: 0 auto;
  padding: 8px 16px;
`;
