import styled from "styled-components";

export const StyledButtonOutlined = styled.button`
  padding: 8px 16px;
  color: #FD6F00;
  background-color: transparent;
  border: 2px solid #FD6F00;
  border-radius: 12px;
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1),
  box-shadow 0.25s cubic-bezier(.2,.8,.2,1);

  &:hover{
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 4px 6px rgba(0,0,0,0.12);
  }
`;