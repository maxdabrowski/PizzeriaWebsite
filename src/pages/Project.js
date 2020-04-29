import React from "react";
import "../styles/Project.css";

const Project = props => {
  return (
    <div className="project">
      <p className="name">{props.project.name}</p>
      <p className="description">{props.project.descripion}</p>
      <img
        className="imgProject"
        src={require(`../images/${props.project.image}.JPG`)}
        alt="img"
      />
      <a className="linkProject" href={props.project.url} target="_blank">
        zobacz projekt
      </a>
    </div>
  );
};

export default Project;
