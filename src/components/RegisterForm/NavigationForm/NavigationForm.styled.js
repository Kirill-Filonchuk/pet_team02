import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ButtonBack = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  border-radius: 40px;
  color: #000;
  justify-content: center;
  align-items: center;
  border: 1px solid #f59256;
  background-color: transparent;
`;

const LinkToLogin = styled(NavLink)`
  margin-left: 5px;
  text-decoration-line: underline;
`;

const StepOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StepTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export { ButtonBack, LinkToLogin, StepOne, StepTwo };
