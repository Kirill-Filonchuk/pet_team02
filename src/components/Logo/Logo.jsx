import { Link, LogoStyle } from './Logo.styled';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoStyle>
        <span className="notranslate">p</span>
        <span className="notranslate">e</span>
        <span style={{ color: '#F59256' }} className="notranslate">
          t
        </span>
        <span className="notranslate">l</span>
        <span className="notranslate">y</span>
      </LogoStyle>
    </Link>
  );
};
