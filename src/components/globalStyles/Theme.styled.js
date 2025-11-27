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
    // tablet: "(max-width: 1024px)",
    desktop: "(min-width: 769px)"
  }
}