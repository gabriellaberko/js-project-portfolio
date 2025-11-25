import styled from "styled-components";


export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;


// intro section

export const StyledIntroSection = styled.section`
  display: flex;
  flex-direction: column;

  @media ${theme.media.desktop} {
    flex-direction: row;
    gap: 32px;
    align-items: center;
    justify-content: space-evenly;
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