import React from "react";
import "../styles/Project.css";

const Drink = props => {
  return (
    <div className="project">
      <p className="name">{props.drink.name}</p>
    </div>
  );
};

export default Drink;