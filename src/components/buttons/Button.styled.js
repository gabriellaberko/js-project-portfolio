import styled from "styled-components";

export const StyledLinkButton = styled.a`
  color: ${(props) => props.theme.colors[props.variant]?.text};
  background-color: ${(props) => props.theme.colors[props.variant]?.bg};
  outline: 2px solid ${(props) => props.theme.colors[props.variant]?.outline};
  border-radius: 12px;
  padding: 8px 16px;
  text-decoration: none;
  display: flex; 
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1),
  box-shadow 0.25s cubic-bezier(.2,.8,.2,1);

  &:hover{
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 4px 6px rgba(0,0,0,0.12);
  }

  @media ${(props) => props.theme.media.desktop} {
    flex: 1;
  }
`;


export const StyledButton = styled.button`
  color: ${(props) => props.theme.colors[props.variant]?.text};
  background-color: ${(props) => props.theme.colors[props.variant]?.bg};
  outline: 2px solid ${(props) => props.theme.colors[props.variant]?.outline};
  border:none;
  border-radius: 12px;
  padding: 8px 16px;
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1),
  box-shadow 0.25s cubic-bezier(.2,.8,.2,1);
  cursor: pointer;

  &:hover{
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 4px 6px rgba(0,0,0,0.12);
  }
`;