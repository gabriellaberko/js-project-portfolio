import React from 'react';
import articleData from '../../data/articles.json';
import { Article } from '../cards/Article';
import { Typography } from '../typography/CustomTypography';
import { StyledCardContainer } from '../cards/CardContainer.styled';
import { StyledSection } from './Section.styled';
import { AnimatedSection } from '../animations/AnimatedSection';
import { Modal } from '../modal/Modal';
import { useState } from 'react';
import { StyledModalImg } from '../modal/Modal.styled';


export const ArticleSection = () => {

  // functionality to open/close article popup modal
    const [selectedArticle, setSelectedArticle] = useState(null);

    const openModal= article => {
      setSelectedArticle(article);
    }
    
    const closeModal = () => {
      setSelectedArticle(null);
    }


  return (
    <>
      <AnimatedSection diredction="up">
        <StyledSection>
          <Typography as="h2">My Journey</Typography>
          <StyledCardContainer>
            {articleData.articles.map((article, index) => (
                <Article 
                  key = {index} 
                  article = {article}  
                  onOpen = {() => openModal(article)}
                />
            ))}
          </StyledCardContainer>
        </StyledSection>
      </AnimatedSection>
    
      {selectedArticle && (
        <Modal onClose={closeModal}>
          <StyledModalImg src={selectedArticle.image} alt="article image" />
          <Typography as="h3">{selectedArticle.title}</Typography>
          {selectedArticle.sections.map((section, index) => (
              <Typography key={index}>{section}</Typography>
            ))}
        </Modal>
      )}
    </>
  )
}