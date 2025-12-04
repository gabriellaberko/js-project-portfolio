import styled from "styled-components";


export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin: 100px 0;
`;


/*--- intro section ---*/

export const StyledIntroSection = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    gap: 32px;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 24px;
  }
`;

export const StyledWrapper = styled.div`
  text-align: center;

  @media ${(props) => props.theme.media.desktop} {
    text-align: initial;
  }
`;


/*--- contact section ---*/

export const StyledContactSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin: 100px 0;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.media.desktop} {
    align-items: flex-start;
  }
`