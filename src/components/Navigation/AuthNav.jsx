import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav style={{ display: 'flex' }}>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        Login
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        Registation
      </Link>
    </nav>
  );
};
