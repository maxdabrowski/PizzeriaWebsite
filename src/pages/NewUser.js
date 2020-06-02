import React from "react";
import "../styles/NewUser.css";
import {useDispatch,useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import { LOGIN_USER } from "../store/user";
import {SET_ORDER_ERROR} from "../store/order";
import { SET_USER_NAME, SET_USER_PASSWORD, SET_USER_FIRST_NAME,SET_USER_LAST_NAME,
  SET_USER_TOWN,SET_USER_STREET, SET_USER_STREET_NUMBER,SET_USER_TEL,SET_USER_MAIL,
  NAME_AVAILABLE, SET_USER_AGREE, SET_INITIAL_USER, SET_USER_CHANGE_FORM} from "../store/newUserValues";

  const NewUser = () => {

  // biblioteka do walidacji 
  let validator = new SimpleReactValidator({

    autoForceUpdate: this,
    className: 'text-danger',
    messages: {
      email: 'That is not an email.',
      default: "Womp! That's not right!"
    },

  });

  let history = useHistory();
  const dispatch = useDispatch();
  /*const dispatch2 = useDispatch();*/
 
  let user = useSelector(state => state.newUserValues);
  let loginUser = useSelector(state => state.user.loginUser);
  let type = user.type;

  if(type === 'CHANGE'){
    dispatch({type: SET_USER_CHANGE_FORM, payload:loginUser})
  };

  //dane nowego użytkownika
  const userToSend = {
    name: user.name.toUpperCase().trim(),
    password: user.password.trim(),
    firstName: user.firstName,
    lastName: user.lastName,
    town: user.town,
    street: user.street,
    streetNumber:user.streetNumber,
    tel: user.tel,
    mail: user.mail,
    type: user.type
  };

  //dodawanie danych o użytkowniku podczas zmian do Stora
  const userHandle = (e, type) => {
    if(type ==='name'){
      dispatch({type: SET_USER_NAME, payload:e.target.value})
    }else if(type ==='password'){
      dispatch({type: SET_USER_PASSWORD, payload:e.target.value})
    }else if(type ==='firstName'){
      dispatch({type: SET_USER_FIRST_NAME, payload:e.target.value})
    }else if(type ==='lastName'){
      dispatch({type: SET_USER_LAST_NAME, payload:e.target.value})
    }else if(type ==='town'){
      dispatch({type: SET_USER_TOWN, payload:e.target.value})
    }else if(type ==='street'){
      dispatch({type: SET_USER_STREET, payload:e.target.value})
    }else if(type ==='streetNumber'){
      dispatch({type: SET_USER_STREET_NUMBER, payload:e.target.value})
    }else if(type ==='tel'){
      dispatch({type: SET_USER_TEL, payload:e.target.value})
    }else if(type ==='email'){
      dispatch({type: SET_USER_MAIL, payload:e.target.value})
    }else if(type ==='agree'){
      const checkbox = document.getElementById('agreeUser')
      if(checkbox.checked){
        dispatch({type: SET_USER_AGREE, payload: true})
      }else{
        dispatch({type: SET_USER_AGREE, payload: false})
      }
    }
  };

  //sprawdzenie czy nazwa użytkownika nie jest już zajęta
  const userAvailable = async e => {
    const response = await fetch('http://localhost:3000/api/user_check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: e.target.value}),
    });
    const body = await response.json();
    dispatch({type: NAME_AVAILABLE, payload:body.available})

  };

  //dodawanie nowego użytkownika
  const UserAdd = async e => {
    e.preventDefault();
    if (validator.allValid() && user.agree && user.nameAvailable) {
      const response = await fetch('http://localhost:3000/api/user', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userToSend }),
      });
      const body = await response.json();
      dispatch({type: LOGIN_USER, payload:body[0]})
      dispatch({type: SET_INITIAL_USER})  
      dispatch({type:SET_ORDER_ERROR, payload: ''})    
      history.push("/menu");
    } else {

      validator.showMessageFor('name');
      validator.showMessages();
      console.log('showMessages')
      //kurwa jebane wiadomości się nie wyświetlają, ale walidacja jest
    }
  };


  






  return(
    <div className='user'>
      <form className='form' onSubmit={(e) => UserAdd(e)} >
        {type==="NEW"?
        <div className='formRow'>
          <label>Nazwa użytkownika:</label>
          <input type='text' value={user.name} onChange={(e) => userHandle(e,'name')} onBlur={(e) => userAvailable(e)}></input>
          {validator.message('name', user.name, 'required')}
          {user.nameAvailable?<p></p>:<p className='loginError'>Nazwa użytkowka jest już istnieje, wybierz inną</p>}    
        </div>
        :<p></p>}
        <div className='formRow'>
          <label>Hasło:</label>
          <input type='text' value={user.password} onChange={(e) => userHandle(e,'password')}  onBlur={() => validator.showMessageFor('name')}></input>
          {validator.message('password', user.password, 'required')}
        </div>
        <div className='formRow'>
          <label>Imię:</label>
          <input type='text'value={user.firstName} onChange={(e) => userHandle(e,'firstName')}></input>
          {validator.message('firstName', user.firstName, 'required')}
        </div>
        <div className='formRow'>
          <label>Nazwisko:</label>
          <input type='text' value={user.lastName} onChange={(e) => userHandle(e,'lastName')}></input>
          {validator.message('lastName', user.lastName, 'required')}
        </div>
        <div className='formRow'>
          <label>Miejscowość:</label>
          <input type='text' value={user.town} onChange={(e) => userHandle(e,'town')}></input>
          {validator.message('town', user.town, 'required')}
        </div>
        <div className='formRow'>
          <label>Ulica:</label>
          <input type='text' value={user.street} onChange={(e) => userHandle(e,'street')}></input>
          {validator.message('street', user.street, 'required')}
        </div>
        <div className='formRow'>
          <label>Numer domu (oraz numer miszkania):</label>
          <input type='text' value={user.streetNumber} onChange={(e) => userHandle(e,'streetNumber')}></input>
          {validator.message('streetNumber', user.streetNumber, 'required')}
        </div>
        <div className='formRow'>
          <label>Numer telefonu:</label>
          <input type='text' value={user.tel} onChange={(e) => userHandle(e,'tel')}></input>
          {validator.message('tel', user.tel, 'required')}
        </div>
        <div className='formRow'>
          <label>Adres email:</label>
          <input type='text' value={user.mail} onChange={(e) => userHandle(e,'email')}></input>
          {validator.message('mail', user.mail, 'required')}
        </div>
        {type==="NEW"?
        <div className="formRow">
          <input id="agreeUser" type="checkbox" onChange={(e) => userHandle(e,'agree')}></input>
          <span>wyrażam zgodę na przetwarzanie moich danych osobowych </span>
        </div>
        :<p></p>}
          <input type='submit' className="button" value={type==="NEW"?"Załóż nowe konto":"Zmień dane"}></input>
      </form>  
    </div>
  );
};

export default NewUser;