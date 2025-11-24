import React from 'react';
import { IconsContainer } from '../icons/IconsContainer';
import { Typography } from '../typography/typography';
import { Img } from '../images/Img';
import styled from 'styled-components';


export const ContactSection = () => {
  return (
    <section>
      <StyledWrapper>
          <Img src="/profile-circle.png" alt="" />
          <StyledContent>
            <Typography as="h2" size="large" weight="bold">Let's Talk!</Typography>
            <Typography weight="medium">Gabriella Berkowicz</Typography>
            <Typography weight="medium">+46(0) 736 37 46 46</Typography>
            <Typography weight="medium">gabriellaberko@live.se</Typography>
            <IconsContainer />
          </StyledContent>
      </StyledWrapper>
    </section>

  );
}


export const StyledWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`