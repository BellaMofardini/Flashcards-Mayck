import styled from "styled-components";

export const Container = styled.form`
  width: 50vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  .text {
    padding: 1.5rem;
    border-bottom: 1px solid #1a8180;
    outline: none;
  }

  .radioButton {
    margin: 1rem;
  }

  .sendButton {
    padding: 1rem;
    background-color: #1a8180;
    color: white;
    width: 50%;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.1s ease;

    &:hover {
      filter: brightness(0.85);
    }
  }

  .cancel {
    background-color: rgba(255, 64, 64, 1);
  }
`;
