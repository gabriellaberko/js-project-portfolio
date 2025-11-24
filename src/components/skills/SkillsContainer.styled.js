import styled from "styled-components";

export const StyledSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;