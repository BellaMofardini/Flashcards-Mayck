import Spacer from "../Spacer";
import { Container } from "./styles";

import { useHistory } from "react-router-dom";

import axios from "axios";

const Course = ({ id, name, desc }) => {
  const history = useHistory();

  function editar() {
    history.push(`/edit/${id}`);
  }

  function remover() {
    axios
      .delete(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`)
      .then(() => {
        window.location.reload();
      });
  }

  return (
    <Container color="red">
      <h1>{name}</h1>
      <Spacer />
      <bold>{desc}</bold>
      <Spacer />
      <div className="buttonsContainer">
        <button onClick={editar}>Editar</button>
        <button onClick={remover}>Remover</button>
      </div>
    </Container>
  );
};

export default Course;
