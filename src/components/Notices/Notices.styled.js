import styled from "styled-components";

export const NoticesWrapper = styled("div")`
  padding-top: 40px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 90px;
    padding-bottom: 200px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;

export const NoticeSection = styled("section")`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const Title = styled("h1")`
  margin: 0;
  margin-bottom: 30px;

  text-align: center;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 24px;
  line-height: 1, 375;
  color: #111111;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;

export const NoticesToolBar = styled("div")`
  display: flex;
  justify-content: space-between;
`;
