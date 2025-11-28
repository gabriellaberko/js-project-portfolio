import React from 'react';
import { Typography } from '../style/typography/CustomTypography';
import { StyledSection } from './Section.styled';
import styled from 'styled-components';
import { AnimatedSection } from '../animations/AnimatedSection';



export const TechSection = () => {
  return (
    <AnimatedSection direction="left">
      <StyledSection>
        <StyledWrapper>
          <Typography as="h2">Tech & Workflow</Typography>
            <Typography>I work with modern development workflows using Git for version control, including structured branching and clear commit history. I value collaboration and enjoy working in pair- or mob-programming settings to build better solutions, share knowledge, and solve problems more effciently. I like to keep exploring new tools and approaches to create smarter solutions while continuously growing as a developer.</Typography>
        </StyledWrapper>
      </StyledSection>
    </AnimatedSection>
  );
}

export const StyledWrapper = styled.div `
  max-width: 780px;
  text-align: center;
`;