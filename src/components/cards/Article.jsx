import React from 'react';
import { Typography } from '../typography/typography';
import { SecondaryButton } from '../buttons/Button';
import { Img } from '../images/Img';
import { StyledCardDiv } from './Card.styled';
import { StyledTextDiv } from './Card.styled';


export const Article = ({ article }) => {
      return (
        <StyledCardDiv>
          <Img src={article.image} alt="article" />
          <div className="tags">
              <Typography>{article.tag}</Typography>
            </div>
          <StyledTextDiv>
            <Typography as="h3" size="medium" weight="regular">{article.title}</Typography>
            <Typography>{article.content}</Typography>
            </StyledTextDiv>
            <SecondaryButton>
              View article 
            </SecondaryButton>
        </StyledCardDiv>
    );
}