import React from "react";
import { StyledCrossIcon, StyledModal, StyledModalOverlay, StyledModalContent } from "./Modal.styled";
import { Img } from "../images/Img";



export const Modal = ({ onClose, children }) => {
  return (
    <StyledModalOverlay onClick={onClose}>
      <StyledCrossIcon className="close-button" onClick={onClose}>
        <Img src="/cross-white.svg" alt="cross icon" height="60px" />
      </StyledCrossIcon>
      <StyledModal>
          <StyledModalContent>
            {children}
          </StyledModalContent>
      </StyledModal>
    </StyledModalOverlay>
  );
}