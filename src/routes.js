import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/courses" component={Courses}></Route>
    </BrowserRouter>
  );
}
