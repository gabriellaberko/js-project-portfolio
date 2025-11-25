import styled from "styled-components";
import { theme } from "../theme/Theme.styled";

// map the size and weight values
const sizeMapping = {
  xs: "16px",
  s: "18px",
  m: "30px",
  l: "64px",
  xl: "80px",
  xxl: "100px"
};

const weightMapping = {
  xlight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  xbold: 800
};


export const StyledTypography = styled.div`
  margin: 0 0 16px 0;
  padding: 0;

  // firsly check if size/weight values have been put manually, otherwise use pre-defined values for media size:

    // mobile (as default)
    font-size: ${({ as, size }) => size ? sizeMapping[size] : theme.typographyConfig[as]?.mobile.size};
    
    font-weight: ${({ as, weight }) => weight ? weightMapping[weight] : theme.typographyConfig[as]?.mobile.weight};

    // desktop
    @media ${theme.media.desktop} {
      font-size: ${({ as, size }) => size ? sizeMapping[size] : theme.typographyConfig[as]?.desktop.size};
    
      font-weight: ${({ as, weight }) => weight ? weightMapping[weight] : theme.typographyConfig[as]?.desktop.weight};
    }
`;
