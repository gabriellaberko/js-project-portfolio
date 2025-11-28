import styled from "styled-components";
import { theme } from "../globalStyles/Theme.styled";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin: 100px 0;
`;


// intro section

export const StyledIntroSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media ${theme.media.desktop} {
    flex-direction: row;
    gap: 32px;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const StyledWrapper = styled.div`
  text-align: center;

  @media ${theme.media.desktop} {
    text-align: initial;
  }
`;


//contact section

export const StyledContactSection = styled(StyledSection)`

  @media ${theme.media.desktop} {
    flex-direction: row;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${theme.media.desktop} {
    align-items: flex-start;
  }
`