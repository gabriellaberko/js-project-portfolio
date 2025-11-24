import React from 'react';
import styled from 'styled-components';

export const Img = ({ src, alt }) => {
  return (
    <StyledImg src={src} alt={alt} />
  );
}

const StyledImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: contain;
`;