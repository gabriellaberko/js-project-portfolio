import React from 'react';
import articleData from '../../data/articles.json';
import { Article } from '../cards/Article';
import { Typography } from '../typography/typography';
import { StyledCardContainer } from '../cards/CardContainer.styled';
import { StyledSection } from './Section.styled';

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