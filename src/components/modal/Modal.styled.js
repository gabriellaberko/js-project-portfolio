import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed; /* stay in place */
  z-index: 1; /* sit on top */
  left: 0;
  top: 0;
  width: 100vw; /* full width */
  height: 100vh; /* full height */
  background-color: rgba(0,0,0,0.4);
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed; /* stay in place */
  z-index: 1; /* sit on top */
  left: 10%;
  right: 10%;
  height: 80vh;
  top: 0;
  margin: 70px auto;
  overflow: auto; /* enable scroll if needed */
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  max-width: 700px;
  border-radius: 12px;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 12px 20px 20px 20px;
`;

export const StyledModalImg = styled.img`
  width: 80%;
  box-shadow: 0 0 2px grey;
  align-self: center;
  margin-bottom: 20px;
`;

export const StyledCrossIcon = styled.div`
  align-self: end;
  margin-right: 24px;
`;