import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "O NAS", path: "/", exact: true },
  { name: "MENU", path: "/menu" },
  { name: "KONTAKT", path: "/contact" },
  { name: "OPINIE", path: "/opinion" },
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <div className="navigation">
      <nav className="main">
        <ul>{menu}</ul>
      </nav>
    </div>
  );
};

export default Navigation;
