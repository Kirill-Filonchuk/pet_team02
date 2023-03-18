import styled from "styled-components";

export const Article = styled("article")`
  /* width: 100%; */
`;

export const ImageWrapper = styled("div")`
  /* width: 100%; */
`;

export const Image = styled("img")`
  display: block;
  width: 100%;
  height: 288px;
  object-fit: cover;
`;

export const Meta = styled("div")`
  padding: 20px 20px 12px;
`;

export const Title = styled("h1")`
  margin: 0;
  margin-bottom: 20px;

  font-family: "Manrope";
  font-weight: 700;
  font-size: 28px;
  line-height: 1.357;
  letter-spacing: -0.01em;
  color: #111111;
`;

export const Table = styled("table")`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  color: #111111;
`;

export const Tr = styled("tr")``;

export const Td = styled("td")`
  padding-bottom: 8px;

  &:first-child {
    padding-right: 40px;
  }
`;

export const BtnWrapper = styled("div")``;

export const Button = styled("button")``;

export const Label = styled("div")``;

export const Favorite = styled("div")``;
