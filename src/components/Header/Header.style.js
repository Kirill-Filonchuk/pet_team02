import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  /* margin-bottom: 16px; */

  > nav {
    display: flex;
  }
`;

export const MenuBtn = styled.button`
  position: absolute;
  display: block;
  top: 16px;
  right: 20px;
  cursor: pointer;
  z-index: 1;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
