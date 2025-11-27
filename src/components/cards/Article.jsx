import React from 'react';
import { Typography } from '../typography/CustomTypography';
import { SecondaryButton } from '../buttons/Button';
import { Img } from '../images/Img';
import { StyledCardDiv } from './Card.styled';
import { StyledTextDivFaded } from './Card.styled';


export const Article = ({ article }) => {
      return (
        <StyledCardDiv>
          <Img src={article.image} alt="article" />
          <div className="tags">
              <Typography>{article.tag}</Typography>
            </div>
          <StyledTextDivFaded>
            <Typography as="h3">{article.title}</Typography>
            <Typography>{article.content}</Typography>
            </StyledTextDivFaded>
            <SecondaryButton>
              View article 
            </SecondaryButton>
        </StyledCardDiv>
    );
}