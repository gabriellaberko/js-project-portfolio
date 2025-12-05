import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 16px;
`;

export const StyledProjectCardContainer = styled(StyledCardContainer)`
  @media ${(props) => props.theme.media.desktop} {
    display: flex;
    flex-direction: column;
    gap: 42px;
    margin-top: 24px;
  }
`;