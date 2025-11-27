import React from 'react';
import { Typography } from '../typography/Typography';
import { StyledSection } from './Section.styled';
import styled from 'styled-components';
import { AnimatedSection } from '../animations/AnimatedSection';



export const TechSection = () => {
  return (
    <AnimatedSection direction="left">
      <StyledSection>
        <Typography as="h2">Tech</Typography>
        <StyledWrapper>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit accusantium totam neque veritatis minima porro facere. Quaerat nostrum, temporibus aspernatur corrupti repellat sunt ipsum? Iusto eaque sequi quod voluptate dolore!</Typography>
        </StyledWrapper>
      </StyledSection>
    </AnimatedSection>
  );
}

export const StyledWrapper = styled.div `
  max-width: 780px;
  text-align: center;
`;