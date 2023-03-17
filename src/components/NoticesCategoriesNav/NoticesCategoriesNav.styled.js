import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled("nav")``;

export const List = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 12px;
`;

export const Item = styled("li")``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;

  padding: 6px 28px;

  font-family: "Manrope";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #111111;

  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &.active,
  &:hover {
    background: #f59256;
    color: #ffffff;
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid #f59256;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 28px;
    font-size: 20px;
  }
`;
