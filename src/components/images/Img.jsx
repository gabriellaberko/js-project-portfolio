import React from 'react';
import styled from 'styled-components';

export const Img = ({ src, alt, height="280px" }) => {
  return (
    <StyledImg src={src} alt={alt} height={height}/>
  );
}

const StyledImg = styled.img`
  height: ${({ height }) => height};
  object-fit: contain;
`;