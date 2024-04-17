import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Resume from "../components/Resume";

function Body() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
      </Routes>
    </>
  );
}

export default Body;
