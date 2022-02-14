import React from "react";
import Project from "./project.js";
import projectsData from "../data/projectsData.js";
class Projects extends React.Component {
  render() {
    const projects = projectsData.map((p) => {
      return (
        <Project image={p.image} id={p.id} desc={p.desc} title={p.title} />
      );
    });
    return projects;
  }
}

export default Projects;
