import React from 'react';
import { Typography } from '../typography/CustomTypography';
import { SecondaryButton } from '../buttons/Button';
import { Img } from '../images/Img';
import { StyledCardDiv } from './Card.styled';
import { StyledTextDivFaded } from './Card.styled';


export const Article = ({ article, onOpen }) => {
      return (
        <StyledCardDiv>
          <Img src={article.image} alt="article image" />
          <div className="tags">
              <Typography>{article.tag}</Typography>
          </div>
          <StyledTextDivFaded>
            <Typography as="h3">{article.title}</Typography>
            <Typography>{article.content}</Typography>
          </StyledTextDivFaded>
          <SecondaryButton onClick={onOpen}>
            View article 
          </SecondaryButton>
        </StyledCardDiv>
    );
}