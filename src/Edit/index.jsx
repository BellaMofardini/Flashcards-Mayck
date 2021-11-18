import { Container } from "./styles";
import NavBar from "../components/Navbar";
import Form from "../components/Form";

import { useParams } from "react-router-dom";

const Add = () => {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <Container>
        <Form edit id={id} />
      </Container>
    </>
  );
};

export default Add;
