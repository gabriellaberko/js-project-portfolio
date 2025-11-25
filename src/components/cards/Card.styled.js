import styled from "styled-components";
import { theme } from "../theme/Theme.styled";

export const StyledCardDiv = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  transition: transform 0.25s ease;
  box-shadow: 0 0 5px rgb(193, 193, 193);
  max-width: 400px;

  &:hover {
    transform: translate(0, -5px);
    /* box-shadow: 0 4px 6px rgba(0,0,0,0.12); */
    box-shadow: 0 0 8px 4px rgba(253, 111, 0, 0.2);
  }
`;

export const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1;
`;

export const StyledTextDiv = styled.div `
  height: 200px;
  overflow: hidden;
  padding-bottom: 1em; 
  position: relative;

  // fade end of text content
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3em; 
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  }
`;

export const StyledButtonDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: column;
  gap: 16px;


  @media ${theme.media.desktop} {
    flex-direction: row;
  }
`;