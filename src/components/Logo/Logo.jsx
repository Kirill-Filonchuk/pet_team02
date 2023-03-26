import { Link, LogoStyle } from './Logo.styled';
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
