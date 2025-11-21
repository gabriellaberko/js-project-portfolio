import React from 'react';
import { Tags } from './Tags';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { GlobeIcon } from '../icons/GlobeIcon';
import { Typography } from '../typography/typography';
import { SecondaryButton } from '../buttons/SecondaryButton';


export const Article = ({ article }) => {
      return (
        <div className="article-div">
          <img src={article.image} alt="article" />
          <div className = "article-content">
            <div className="tags">
              <Tags className="article-tag">{article.tag}</Tags>
            </div>
            <Typography className="card-title" variant="h3">{article.title}</Typography>
            <Typography>{article.content}</Typography>
            <SecondaryButton className="primary-btn">
              <GlobeIcon />
              View article 
            </SecondaryButton>
          </div>
        </div>
    );

}