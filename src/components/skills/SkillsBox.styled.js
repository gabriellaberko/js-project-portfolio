import styled from "styled-components";


export const SkillsBoxDiv = styled.div `  
  @media (min-width: 768px) {
  width: 200px;
  }
`;

export const LineDivider = styled.div`
  &:not(:last-child) {
    border-bottom: 2px solid #FD6F00; /* horizontal */
  }

  @media (min-width: 768px) {
    height: auto;

    &:not(:last-child) {
      border-bottom: none;
      border-right: 2px solid #FD6F00;
    }
  }
`;