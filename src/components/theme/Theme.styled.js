import styled from "styled-components";

export const theme = {
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem"
  },
  colors: {
    main: {
      bg: "rgb(253, 253, 252)",
      text: "#121212"
    },
    primaryBtn: {
      bg: "#FD6F00",
      text: "#FFFFFF;",
      outline: "2px solid #FD6F00"
    },
    secondaryBtn: {
      bg: "transparent",
      text: "#FD6F00",
      outline: "2px solid #FD6F00"
    }
  },
  media: {
    mobile: "(max-width: 768px)",
    tablet: "(max-width: 1024px)",
    desktop: "(min-width: 1025px)"
  },
  typographyConfig: {
    h1: {
      mobile: { size: "80px", weight: 700 },
      desktop: { size: "100px", weight: 700 }
    },
    h2: {
      mobile: { size: "60px", weight: 700 },
      desktop: { size: "80px", weight: 700 }
    },
    h3: {
      mobile: { size: "30px", weight: 500 },
      desktop: { size: "24px", weight: 500 }
    },
    p: {
      mobile: { size: "16px", weight: 400 },
      desktop: { size: "18px", weight: 400 }
    }
  }
}