import styled from "styled-components";


export const StyledSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    justify-content: center;

  }
`;