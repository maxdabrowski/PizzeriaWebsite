import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <div className='title'>Cessare Pizza</div>
        <Link to="/menu">Zamów online</Link>
    </>
  );
};

export default Header;
