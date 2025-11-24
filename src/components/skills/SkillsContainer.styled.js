import styled from "styled-components";

export const StyledSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch; 
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;