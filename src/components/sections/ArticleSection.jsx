import React from 'react';
import articleData from '../../data/articles.json';
import { Article } from '../cards/Article';
import { SecondaryButton } from '../buttons/SecondaryButton';
import { ArrowIcon } from '../icons/ArrowIcon';
import { Typography } from '../typography/typography';

export const ArticleSection = () => {
  return (
    <section className="article-section">
      <Typography className="section-title" variant="h2">My words</Typography>
      <div className = "articles-container">
        {articleData.articles.map((article, index) => (
            <Article key = {index} article = {article}  />
        ))}
      </div>
      <SecondaryButton>
            <ArrowIcon />
            See more articles
      </SecondaryButton>
  </section>
  );
}