import styled from "styled-components";
import { theme } from "../globalStyles/Theme.styled";

export const StyledSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media ${theme.media.desktop} {
    flex-direction: row;
    justify-content: center;

  }
`;