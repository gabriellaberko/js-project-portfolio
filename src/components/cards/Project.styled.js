import styled from "styled-components";

export const StyledProjectDiv = styled.div`
  background-color: white;
  border: 1px solid #E9E9E9;
  border-radius: 12px;
  padding: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
`;

export const StyledContentDiv = styled.div`
  flex: 1;
`;


export const StyledButtonDiv = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;