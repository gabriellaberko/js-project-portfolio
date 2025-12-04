import styled from "styled-components";


export const StyledSkillsBoxDiv = styled.div `
  flex: 1;
  text-align: center;
  padding: 0 7px;

  @media ${(props) => props.theme.media.desktop} {
    width: 200px;
  }
`;


export const StyledSkillsList = styled.ul `
  list-style-type: none;
  padding-left: 0; 
`;


export const StyledLineDivider = styled.div`
  &:not(:last-child) {
    border-bottom: 2px solid ${(props) => props.theme.colors.main.accent}; /* horizontal line */
  }

  @media ${(props) => props.theme.media.desktop} {
    height: auto;

    &:not(:last-child) {
      border-bottom: none;
      border-right: 2px solid ${(props) => props.theme.colors.main.accent}; /* vertical line */
    }
  }
`;