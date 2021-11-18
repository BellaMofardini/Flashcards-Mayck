import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={Add} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/courses" component={Courses} />
    </BrowserRouter>
  );
}
