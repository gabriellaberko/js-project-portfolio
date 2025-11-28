import styled from "styled-components";


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
  medium: 600,
  bold: 700,
  xbold: 800
};

const typographyConfig = {
  h1: {
    mobile: { size: "80px", weight: 700 },
    desktop: { size: "100px", weight: 700 }
  },
  h2: {
    mobile: { size: "60px", weight: 700 },
    desktop: { size: "80px", weight: 700 }
  },
  h3: {
    mobile: { size: "30px", weight: 600 },
    desktop: { size: "24px", weight: 600 }
  },
  p: {
    mobile: { size: "16px", weight: 400 },
    desktop: { size: "18px", weight: 400 }
  }
}


export const StyledTypography = styled.div`
  margin: 0 0 16px 0;
  padding: 0;

  // firsly check if size/weight values have been put manually, otherwise use pre-defined values for media size:

    // mobile (as default)
    font-size: ${({ as, size }) => size ? sizeMapping[size] : typographyConfig[as]?.mobile.size};
    
    font-weight: ${({ as, weight }) => weight ? weightMapping[weight] : typographyConfig[as]?.mobile.weight};

    // desktop
    @media ${(props) => props.theme.media.desktop} {
      font-size: ${({ as, size }) => size ? sizeMapping[size] : typographyConfig[as]?.desktop.size};
    
      font-weight: ${({ as, weight }) => weight ? weightMapping[weight] : typographyConfig[as]?.desktop.weight};
    }
`;
