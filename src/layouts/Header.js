import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div class='title'>Cessare Pizza</div>
        <Link to="/order">Zamów online</Link>
    </>
  );
};

export default Header;
