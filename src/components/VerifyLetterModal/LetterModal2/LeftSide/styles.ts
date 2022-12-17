import { styled } from "@mui/material/styles";

export const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #0f588d0d; ;
`;

export const StyledImg = styled("img")`
  width: 100%;
  margin-bottom: 21px;
`;
export const StyledBox = styled("div")``;

export const StyledBoxWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 34px;

  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.16px;
    color: #000000;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.16px;
  }
`;

export const StyledNameList = styled("div")`
  margin-bottom: 8px;
`;
