import { StyledBackdrop } from './Backdrop.styled';

const Backdrop = ({ onClick, children }) => {
  return <StyledBackdrop onClick={onClick}>{children}</StyledBackdrop>;
};

export default Backdrop;
