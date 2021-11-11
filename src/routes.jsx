import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";
import Add from "./Add";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route path="/add" component={Add}></Route>
      <Route path="/courses" component={Courses}></Route>
    </BrowserRouter>
  );
}
