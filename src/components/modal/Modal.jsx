import React from "react";
import { StyledCrossIcon } from "./Modal.styled";
import { StyledModal } from "./Modal.styled";
import { StyledModalOverlay } from "./Modal.styled";
import { StyledModalContent } from "./Modal.styled";
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