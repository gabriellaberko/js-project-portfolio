import styled from "styled-components";

export const StyledLinkButtonFilled = styled.a`
  padding: 8px 16px;
  color: #FFFFFF;
  background-color: #FD6F00;
  outline: 2px solid #FD6F00;
  border-radius: 12px;
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

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const StyledLinkButtonOutlined = styled.a`
  padding: 8px 16px;
  color: #FD6F00;
  outline: 2px solid #FD6F00;
  border-radius: 12px;
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

  @media (min-width: 768px) {
    flex: 1;
  }
`;