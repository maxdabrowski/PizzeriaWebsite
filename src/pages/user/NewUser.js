import React from "react";
import "../../styles/User.css";
import {useDispatch,useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_USER } from "../../store/user";
import {SET_ORDER_ERROR} from "../../store/order";
import { SET_USER_NAME, SET_USER_PASSWORD, SET_USER_FIRST_NAME,SET_USER_LAST_NAME,
  SET_USER_TOWN,SET_USER_STREET, SET_USER_STREET_NUMBER,SET_USER_TEL,SET_USER_MAIL,
  NAME_AVAILABLE, SET_USER_AGREE, SET_INITIAL_USER, SET_USER_CHANGE_FORM, SET_TRY_SEND} from "../../store/newUserValues";

  const NewUser = () => {

  let history = useHistory();
  const dispatch = useDispatch();

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
        dispatch({type: SET_USER_AGREE, payload: false})
      }else{
        dispatch({type: SET_USER_AGREE, payload: true})
      }
    }
  };

  //sprawdzenie czy nazwa użytkownika nie jest już zajęta
  const userAvailable = async e => {
    const response = await fetch('https://cessarepizza.herokuapp.com/api/user_check', {
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
    dispatch({type: SET_TRY_SEND}) 
    if (!user.agree &&
        !user.nameError &&
        !user.passwordError &&
        !user.firstNameError &&
        !user.lastNameError &&
        !user.townError &&
        !user.streetError &&
        !user.streetNumberError &&
        !user.telError &&
        !user.mailError &&      
      user.nameAvailable) {
      const response = await fetch('https://cessarepizza.herokuapp.com/api/user', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userToSend }),
      });
      const body = await response.json();
      dispatch({type: LOGIN_USER, payload:body})
      dispatch({type: SET_INITIAL_USER})  
      dispatch({type:SET_ORDER_ERROR, payload: ''})    
      history.push("/menu");
    }
  };
  return(
    <div className='user'>
      <form className='form' onSubmit={(e) => UserAdd(e)} >
        {type==="NEW"?
        <div className='formRow'>
          <label>Nazwa użytkownika:</label>
          <input type='text' value={user.name} onChange={(e) => userHandle(e,'name')} onBlur={(e) => userAvailable(e)}></input>
          {user.nameError && user.trySend ?<p className='formError'>nazwa użytkownika powinna składać się z liter</p>:<p></p>}
          {user.nameAvailable? <p></p> :<p className='formError'>podana nazwa użytkownika już istnieje, wybierz inną</p>}    
        </div>
        :<p></p>}
        <div className='formRow'>
          <label>Hasło:</label>
          <input type='text' value={user.password} onChange={(e) => userHandle(e,'password')}></input>
          {user.passwordError && user.trySend ?<p className='formError'>minimum 8 znaków, w tym liczba oraz mała i duża litera</p>:<p></p>}
        </div>
        <div className='formRow'>
          <label>Imię:</label>
          <input type='text'value={user.firstName} onChange={(e) => userHandle(e,'firstName')}></input>
          {user.firstNameError && user.trySend ?<p className='formError'>imię powinno składać się z liter</p>:<p></p>}
        </div>
        <div className='formRow'>
          <label>Nazwisko:</label>
          <input type='text' value={user.lastName} onChange={(e) => userHandle(e,'lastName')}></input>
          {user.lastNameError && user.trySend ?<p className='formError'>nazwisko powinno składać się z liter</p>:<p></p>}
        </div>
        <div className='formRow'>
          <label>Miejscowość:</label>
          <input type='text' value={user.town} onChange={(e) => userHandle(e,'town')}></input>
          {user.townError && user.trySend ?<p className='formError'>miejscowość powinna składać się z liter</p>:<p></p>}
        </div>
        <div className='formRow'>
          <label>Ulica:</label>
          <input type='text' value={user.street} onChange={(e) => userHandle(e,'street')}></input>
          {user.streetError && user.trySend ?<p className='formError'>nazwa ulicy powinna składać się z liter</p>:<p></p>}
        </div>
        <div className='formRow'>
          <label>Numer domu (oraz numer mieszkania):</label>
          <input type='text' value={user.streetNumber} onChange={(e) => userHandle(e,'streetNumber')}></input>
          {user.streetNumberError && user.trySend ?<p className='formError'>podaj numer domu,nr. meszkania dopisz po przecinku</p>:<p></p>}
        </div>
        <div className='formRow'>
          <label>Numer telefonu:</label>
          <input type='text' value={user.tel} onChange={(e) => userHandle(e,'tel')}></input>
          {user.telError && user.trySend ?<p className='formError'>numer telefonu powinien składać się z 9 liczb</p>:<p></p>}
        </div>
        <div className='formRow'>
          <label>Adres email:</label>
          <input type='text' value={user.mail} onChange={(e) => userHandle(e,'email')}></input>
          {user.mailError && user.trySend?<p className='formError'>podaj poprawny adres email</p>:<p></p>}
        </div>
        {type==="NEW"?
        <div className="formRow">
          <div className="agree">
            <input id="agreeUser" type="checkbox" onChange={(e) => userHandle(e,'agree')}></input>
            <span className="checkDescript">wyrażam zgodę na przetwarzanie moich danych osobowych </span>
          </div>
          {user.agree && user.trySend?<p className='formError'>musisz wyrazić zgodę</p>:<p></p>}
        </div>
        :<p></p>}
          <input type='submit' className="button loginBtn" value={type==="NEW"?"Załóż nowe konto":"Zmień dane"}></input>
      </form>  
    </div>
  );
};

export default NewUser;