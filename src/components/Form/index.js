import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";
import axios from "axios";

const Form = ({ edit, id }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const history = useHistory();

  function pegarDadosEFiltrar() {
    axios
      .get("https://flashcard-api-mayck.herokuapp.com/api/colecoes")
      .then(({ data }) => {
        const course = data.filter((c) => {
          return (c.colecaoId = id);
        });

        setName(course[0]?.nome);
        setDesc(course[0]?.descricao);
        setPrivacy(course[0]?.publico);
      });
  }

  useEffect(() => {
    edit && pegarDadosEFiltrar();
  }, []);

  function submit(e) {
    e.preventDefault();

    if (edit) {
      axios
        .put(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`, {
          nome: name,
          descricao: desc,
          publico: privacy,
        })
        .finally(() => {
          history.push("/courses");
        });
      return;
    }

    axios
      .post("https://flashcard-api-mayck.herokuapp.com/api/colecoes", {
        nome: name,
        descricao: desc,
        publico: privacy,
      })
      .finally(() => {
        history.push("/courses");
      });
  }

  function cancel() {
    history.push("/courses");
  }

  return (
    <Container onSubmit={submit}>
      <label>Name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text"
        type="text"
      />
      <label>Description:</label>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="text"
        style={{ resize: "none" }}
      />
      <label>Privacy</label>
      <div style={{ margin: "2rem 0 2rem 0", padding: "1rem" }}>
        <label style={{ fontWeight: "normal" }} htmlFor="publico">
          Public
        </label>
        <input
          onChange={() => setPrivacy(true)}
          id="publico"
          checked={privacy}
          className="radioButton"
          type="radio"
        />
        <label style={{ fontWeight: "normal" }} htmlFor="privado">
          Private
        </label>
        <input
          onChange={() => setPrivacy(false)}
          id="privado"
          checked={!privacy}
          className="radioButton"
          type="radio"
        />
      </div>
      <input
        className="sendButton cancel"
        type="button"
        value="Cancel"
        onClick={cancel}
      />
      <input
        className="sendButton"
        type="submit"
        value={edit ? "Save" : "Add"}
      />
    </Container>
  );
};

export default Form;
