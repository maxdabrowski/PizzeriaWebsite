import React from "react";
import "../styles/NewUser.css";
import {useDispatch,useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_USER } from "../store/user";

const NewUser = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.newUserValues);


  const userToSend = {
    name: user.name,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    town: user.town,
    street: user.street,
    streetNumber:user.streetNumber,
    tel: user.tel,
    email: user.email
  };

  const userHandle = (e, type) => {

console.log(type);


    /*if(type ==='name'){
      dispatch({type: SET_LOGIN_NAME, payload:e.target.value})
    }else if(type ==='password'){
      dispatch({type: SET_LOGIN_PASSWORD, payload:e.target.value})
    } */
  };
/*
  const userAvailable = (e, type) => {
    if(type ==='name'){
      dispatch({type: SET_LOGIN_NAME, payload:e.target.value})
    }else if(type ==='password'){
      dispatch({type: SET_LOGIN_PASSWORD, payload:e.target.value})
    } 
  };
*/



  const UserHandle = async e => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/new_user', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ userToSend }),
   });
   const body = await response.json();
   dispatch({type: LOGIN_USER, payload:body[0]})
  };

  return(
    <div className='newUser'>
      <p>Dzięki założeniu konta będzissz mógł zamawiać online</p>
    <form className='form' onSubmit={(e) => UserHandle(e)} >
      <div className='formRow'>
        <label>Nazwa użytkownika:</label>
        <input type='text' value={user.name} onChange={(e) => userHandle(e,'name')}></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userPassword'>Hasło:</label>
        <input type='text' value={user.password} onChange={(e) => userHandle(e,'password')}></input>
      </div>
      <div className='formRow'>
        <label>Imię:</label>
        <input type='text'value={user.firstName} onChange={(e) => userHandle(e,'firstName')}></input>
      </div>
      <div className='formRow'>
        <label>Nazwisko:</label>
        <input type='text' value={user.lastName} onChange={(e) => userHandle(e,'lastName')}></input>
      </div>
      <div className='formRow'>
        <label>Miejscowość:</label>
        <input type='text' value={user.town} onChange={(e) => userHandle(e,'town')}></input>
      </div>
      <div className='formRow'>
        <label>Ulica:</label>
        <input type='text' value={user.street} onChange={(e) => userHandle(e,'street')}></input>
      </div>
      <div className='formRow'>
        <label>Numer domu (oraz numer miszkania):</label>
        <input type='text' value={user.streetNumber} onChange={(e) => userHandle(e,'streetNumber')}></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userNumber'>Numer telefonu:</label>
        <input type='text' value={user.tel} onChange={(e) => userHandle(e,'tel')}></input>
      </div>
      <div className='formRow'>
        <label>Adres email:</label>
        <input type='text' value={user.mail} onChange={(e) => userHandle(e,'email')}></input>
      </div>
      <div className="formRow">
         <input type="checkbox" value='czekbox' onChange={(e) => userHandle(e,'agree')} ></input>
          <span>wyrażam zgodę na przetwarzanie moich danych osobowych </span>
      </div>
      <input type='submit' className="button" value="Załóż nowe konto"></input>

      </form> 
  
</div>
  );
};
export default NewUser;