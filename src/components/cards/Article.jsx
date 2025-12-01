import React from 'react';
import { Typography } from '../style/typography/CustomTypography';
import { Button } from '../buttons/Button';
import { Img } from '../images/Img';
import { StyledCardDiv, StyledTextDivFaded } from './Card.styled';


export const Article = ({ article, onOpen }) => {
      return (
        <StyledCardDiv>
          <Img src={article.image} alt="article image" />
          <div className="tags">
              <Typography>{article.tag}</Typography>
          </div>
          <StyledTextDivFaded>
            <Typography as="h3">{article.title}</Typography>
            {article.sections.map((section, index) => (
              <Typography key={index}>{section}</Typography>
            ))}
          </StyledTextDivFaded>
          <Button onClick={onOpen}>
            View article 
          </Button>
        </StyledCardDiv>
    );
}