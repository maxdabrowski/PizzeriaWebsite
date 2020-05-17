import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login= () => {


//'https://cessarepizza.herokuapp.com/menu/pizza'

 const loginHandle = async e => {
   e.preventDefault();
   const response = await fetch('http://localhost:3000/api/react', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post: 'wysłane z react' }),
  });
  const body = await response.text();

  console.log(body);

 console.log("logowanie kurła")

 };
 
  return(
    <div className='login'>
        <form className='form' onSubmit={(e) => loginHandle(e)}>
          <div className='formRow'>
            <label htmlFor='userName'>Nazwa użytkownika:</label>
            <input type='text' required name='userName' id='userName'></input>
          </div>
          <div className='formRow'>
            <label htmlFor='userPassword'>Hasło:</label>
            <input type='password' required name='userPassword' id='userPassword'></input>
          </div>
          <input type='submit' className="button" value="Zaloguj się"></input>
          <p className='loginError'>błędna nazwa użykownika lub hasło</p>
          <Link to="/new_user"><p className="toNewUser">Załóż nowe konto</p></Link>      
          </form>   
    </div>
  );
};
export default Login;