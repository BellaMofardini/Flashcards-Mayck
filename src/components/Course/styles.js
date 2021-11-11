import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: 100ms ease;

  bold {
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.2rem;
  }

  &:hover {
    filter: brightness(0.85);
    transform: scale(1.05);
  }
`;
