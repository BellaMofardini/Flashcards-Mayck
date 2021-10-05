import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/courses">
          Cursos
        </NavLink>
        <div className="animation start-home"> </div>
      </nav>
    </>
  );
}

export default Navbar;
