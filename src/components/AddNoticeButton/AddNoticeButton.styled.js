import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";

export const AddButton = styled("button")`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;

  position: fixed;
  bottom: 20%;
  right: 20px;
  transform: translateY(+50%);

  width: 80px;
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f59256;
  border-radius: 50%;

  @media screen and (max-width: calc(768px - 0.02px)) {
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }

  @media screen and (min-width: 768px) {
    position: static;
    flex-direction: row-reverse;
    align-self: flex-start;
    flex-shrink: 0;
    column-gap: 12px;

    width: auto;
    height: auto;
    transform: translateY(0);

    background-color: transparent;
  }
`;

export const IconWrapper = styled("div")`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    background-color: #f59256;
    border-radius: 50%;
  }
`;

export const PlusIcon = styled(BsPlusLg)`
  display: block;
  width: 32px;
  height: 32px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const AddButtonText = styled("span")`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 12px;
  line-height: 1.333;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
    color: #111111;
  }
`;
