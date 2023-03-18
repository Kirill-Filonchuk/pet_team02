import styled from "styled-components";

export const StyledTempContainer = styled("div")`
  margin: 0 auto;
  width: 100%;

  padding-right: 20px;
  padding-left: 20px;

  //mobile
  @media screen and (max-width: calc(768px - 0.02px)) {
    max-width: 320px;
  }

  //tablet
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  //desktop
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 16px;
    padding-left: 16px;
  }

  /* outline: 1px solid red; */
`;
