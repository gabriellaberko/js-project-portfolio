import React from 'react';
import articleData from '../../data/articles.json';
import { Article } from '../cards/Article';
import { Typography } from '../typography/typography';
import { StyledCardContainer } from '../cards/CardContainer.styled';
import styled from 'styled-components';

export const ArticleSection = () => {
  return (
    <StyledSection>
      <Typography as="h2">My Journey</Typography>
      <StyledCardContainer>
        {articleData.articles.map((article, index) => (
            <Article key = {index} article = {article}  />
        ))}
      </StyledCardContainer>
  </StyledSection>
  );
}

export const StyledSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;