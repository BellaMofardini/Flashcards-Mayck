import Spacer from "../Spacer";
import { Container } from "./styles";

const Course = ({ name, desc }) => {
  return (
    <Container>
      <h1>{name}</h1>
      <Spacer />
      <bold>{desc}</bold>
    </Container>
  );
};

export default Course;
