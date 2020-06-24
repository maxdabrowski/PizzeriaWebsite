import React from "react";
import { NavLink, Link } from "react-router-dom";
import {useSelector} from "react-redux";
import "../styles/Navigation.css";

//lista ścieżek w nawigacji
const list = [
  { name: "O NAS", path: "/", exact: true },
  { name: "MENU", path: "/menu" },
  { name: "KONTAKT", path: "/contact" },
  { name: "OPINIE", path: "/opinion" },
];

const Navigation = () => {

  const user = useSelector(state => state.user);
  const LogIn = user.logIn;
  const nick = user.loginUser.firstName + ' ' + user.loginUser.lastName;

  //lista Linków do nawigacji
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
      {LogIn?
      <Link to="/user"><p className="loginButon">{nick}</p></Link>
    :
    <Link to="/login"><p className="loginButon">Zaloguj się</p></Link>
      }
    </div>
  );
};

export default Navigation;
