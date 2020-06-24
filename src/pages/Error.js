import React from "react";
import img from "../images/error.jpg";

const Error = () => {
  return(
  <> 
    <div> Błąd 404: Nie ma takiej strony</div>
    <img className="imgError" src={img} alt="img" />
  </>
  )
};

export default Error;
