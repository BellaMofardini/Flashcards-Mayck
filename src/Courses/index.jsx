import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Course from "../components/Course";

import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("https://flashcard-api-mayck.herokuapp.com/api/colecoes")
      .then(({ data }) => {
        setCourses(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1> Cursos </h1>
        <Link
          to="/add"
          style={{
            textAlign: "center",
            fontSize: "2rem",
            textDecoration: "none",
            color: "rgba(255,255,255,0.75)",
            margin: "1.5rem",
          }}
        >
          Adicionar
        </Link>
      </div>
      <div
        className="cursos"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {courses.map((curso) => {
          return (
            <Course
              key={curso.colecaoId}
              id={curso.colecaoId}
              name={curso.nome}
              desc={curso.descricao}
            />
          );
        })}
      </div>
    </>
  );
}

export default Courses;
