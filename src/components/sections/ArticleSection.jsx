import React from 'react';
import articleData from '../../data/articles.json';
import { Article } from '../cards/Article';
import { Typography } from '../typography/typography';
import { StyledCardContainer } from '../cards/CardContainer.styled';

export const ArticleSection = () => {
  return (
    <section className="article-section">
      <Typography as="h2" size="large" weight="bold">My words</Typography>
      <StyledCardContainer>
        {articleData.articles.map((article, index) => (
            <Article key = {index} article = {article}  />
        ))}
      </StyledCardContainer>
  </section>
  );
}