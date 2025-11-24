import React from 'react';
import { Tags } from './Tags';
import { PrimaryLinkButton } from '../buttons/LinkButton';
import { GlobeIcon } from '../icons/GlobeIcon';
import { Typography } from '../typography/typography';
import { SecondaryButton } from '../buttons/Button';
import { Img } from '../images/Img';


export const Article = ({ article }) => {
      return (
        <div className="article-div">
          <Img src={article.image} alt="article" />
          <div className = "article-content">
            <div className="tags">
              <Tags className="article-tag">{article.tag}</Tags>
            </div>
            <Typography as="h3" size="medium" weight="regular">{article.title}</Typography>
            <Typography>{article.content}</Typography>
            <SecondaryButton>
              View article 
            </SecondaryButton>
          </div>
        </div>
    );

}