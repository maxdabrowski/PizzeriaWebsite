import React from "react";
import "../styles/Login.css";
import { Link, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { LOGIN_USER } from "../store/user";
import { SET_LOGIN_NAME, SET_LOGIN_PASSWORD , SET_LOGIN_ERROR} from "../store/loginValues";

const Login= () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const login = useSelector(state => state.loginValues);

  const userToLogin = {
    name: login.name,
    password:login.password
  };

  //ustawianie wpisywanych wartości w nazwie i haśle do Stora
  const loginHandle = (e, type) => {
    if(type ==='name'){
      dispatch({type: SET_LOGIN_NAME, payload:e.target.value})
    }else if(type ==='password'){
      dispatch({type: SET_LOGIN_PASSWORD, payload:e.target.value})
    } 
  };

  //wysyłanie danych do API
  const loginSubmit = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/login_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userToLogin),
    });
    const body = await response.json();

    if(body.error === "nameError"){
      dispatch({type: SET_LOGIN_ERROR, payload:'błędna nazwa użytkownika'});
    }else if(body.error === "passwordError"){
      dispatch({type: SET_LOGIN_ERROR, payload:'błędne hasło'});
    }else if(body.error === 'none'){
      dispatch({type: SET_LOGIN_ERROR, payload:''});
      dispatch({type: LOGIN_USER, payload:body.user[0]});
      history.push("/menu");
    }
  };

  return(
    <div className='login'>
        <form className='form' onSubmit={(e) => loginSubmit(e)}>
          <div className='formRow'>
            <label>Nazwa użytkownika:</label>
            <input type='text' value={login.name} onChange={(e) => loginHandle(e,'name')}></input>
          </div>
          <div className='formRow'>
            <label>Hasło:</label>
            <input type='password' value={login.password} onChange={(e) => loginHandle(e, 'password')}></input>
          </div>
          <input type='submit' className="button" value="Zaloguj się"></input>
          <p className='loginError'>{login.error}</p>
          <Link to="/new_user"><p className="toNewUser">Załóż nowe konto</p></Link>      
          </form>   
    </div>
  );
};
export default Login;