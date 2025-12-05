import styled from "styled-components";

export const StyledCardDiv = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  transition: transform 0.25s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  /* width: 100%; */

  @media ${(props) => props.theme.media.desktop} {
    width: initial;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow:
      0 0 6px rgba(253, 111, 0, 0.15), 
      0 8px 20px rgba(0, 0, 0, 0.10);   
  }
`;

export const StyledProjectCardDiv = styled(StyledCardDiv)`
  max-width: initial;
  width: initial;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    justify-content: space-around;
    gap: 12px;
    box-shadow: none;
    padding: 32px 12px;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")}; //reverse the content for every second project
  }
`;


export const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex: 1;
`;

export const StyledTextDiv = styled.div `
  overflow: hidden;
  padding-bottom: 1em; 
  position: relative;
`;

export const StyledTextDivFaded = styled(StyledTextDiv)`
  max-height: 270px;

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

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    width: 70%;
  }
`;

export const StyledProjectContentWrapper = styled.div`
  display:flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  @media ${(props) => props.theme.media.desktop} {
    max-width: 50%;
    margin: 12px 0;
  }
`;