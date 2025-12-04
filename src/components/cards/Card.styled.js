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
  width: 100%;

  @media ${(props) => props.theme.media.desktop} {
    width: initial;
  }

  &:hover {
    transform: translate(0, -5px);
    box-shadow:
      0 0 6px rgba(253, 111, 0, 0.15), 
      0 8px 20px rgba(0, 0, 0, 0.10);   
    outline: 1px solid ${(props) => props.theme.colors.main.outline};
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
  max-height: 270px;
`;

export const StyledTextDivFaded = styled(StyledTextDiv)`
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
  }
`;