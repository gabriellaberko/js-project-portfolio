import React from "react";
import { AnimatedSection } from "./AnimatedSection";
import { theme } from "../../style/Theme.styled";

export const AnimatedProjectSection = ({ children }) => {
  
  const isBigScreen = window.matchMedia(theme.media.desktop).matches;
  
  return (
    !isBigScreen 
    ? (<AnimatedSection direction="up">{children}</AnimatedSection>) 
    : (children)
  );
}
