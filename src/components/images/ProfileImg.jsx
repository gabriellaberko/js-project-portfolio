import React from 'react';
import styled from 'styled-components';

export const ProfileImg = () => {
  return (
    <StyledImg src="/Frame.png" alt="profile picture" />
  );
}

export const StyledImg = styled.img `
  height: 400px;
  object-fit: contain;
`;