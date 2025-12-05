import styled from "styled-components";

const slideDirections = {
  up: 'translateY(50px)',
  down: 'translateY(-50px)',
  left: 'translateX(-50px)',
  right: 'translateX(50px)',
};

export const StyledAnimatedSection = styled.div`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ direction, visible }) => visible ? 'translate(0, 0)' : slideDirections[direction] || 'translateY(50px)'};
  transition: all 1s cubic-bezier(0.25, 0.1, 0.25, 1);
`;
