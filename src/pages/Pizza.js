import React from "react";
import "../styles/Project.css";

const Pizza = props => {

  return (
    <div className="project">
      <p className="name">{props.pizza.name}</p>
    </div>
  );
};

export default Pizza;