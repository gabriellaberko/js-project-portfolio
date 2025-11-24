import React from 'react';
import styled from 'styled-components';

export const Img = ({ src, alt }) => {
  return (
    <StyledImg src={src} alt={alt} />
  );
}

const StyledImg = styled.img`
  height: 300px;
  object-fit: contain;
`;