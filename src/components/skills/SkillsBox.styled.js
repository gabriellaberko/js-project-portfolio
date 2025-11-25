import styled from "styled-components";
import { theme } from "../theme/Theme.styled";

export const SkillsBoxDiv = styled.div `
  flex: 1;
  ${theme.media.desktop} {
    width: 200px;
  }
`;

export const LineDivider = styled.div`
  &:not(:last-child) {
    border-bottom: 2px solid #FD6F00; /* horizontal line */
  }

  @media ${theme.media.desktop} {
    height: auto;

    &:not(:last-child) {
      border-bottom: none;
      border-right: 2px solid #FD6F00; /* vertical line */
    }
  }
`;