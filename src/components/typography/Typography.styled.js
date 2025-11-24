import styled from "styled-components";

// map the size and weight values
const sizeMapping = {
  xs: "16px",
  small: "18px",
  medium: "30px",
  large: "64px",
  xlarge: "80px",
  xxlarge: "100px"
};

const weightMapping = {
  light: 300,
  regular: 400,
  medium: 600,
  bold: 700,
};


export const StyledTypography = styled.p`
  margin: 0 0 16px 0;
  padding: 0;
  font-size: ${({ size }) => sizeMapping[size]};
  font-weight: ${({ weight }) => weightMapping[weight]};
`;
