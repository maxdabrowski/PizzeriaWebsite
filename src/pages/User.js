import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import "../styles/NewUser.css";
import Popup from "reactjs-popup";
import UserDeletePopup from "./UserDeletePopup"
import { LOGOUT_USER } from "../store/user";
import { SET_USER_TYPE } from "../store/newUserValues";

const User= () => {
  
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector(state => state.user.loginUser);

  const changeUserData = async e => {
    console.log('changeUserData');
    dispatch({type: SET_USER_TYPE, payload:"CHANGE" })
    history.push("/new_user");
  };
  
  const logOut = ()  => {
    dispatch({type: LOGOUT_USER})
    history.push("/");
  };
  
  return(
    <div className="newUser">
      <div className="userData">
        <h1>Twoje Dane</h1>
        <table>
          <tbody className='userTable'>
            <tr>
              <td>Nazwa użytkownka:</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Hasło:</td>
              <td>{user.password}</td>
            </tr>
            <tr>
              <td>Imię i nazwisko:</td>
              <td>{user.firstName + ' '+ user.lastName}</td>
            </tr>
            <tr>
              <td>Adres:</td>
              <td>{user.town +' '+ user.street +' '+ user.streetNumber}</td>
            </tr>
            <tr>
              <td>Adres email:</td>
              <td>{user.mail}</td>
            </tr>
            <tr>
              <td>Telefon:</td>
              <td>{user.tel}</td>
            </tr>
          </tbody>
        </table>
        <button className="button" onClick={() => logOut()}>Wyloguj</button>
        <button className="button"onClick={() => changeUserData()}>Zmień dane</button>
        <Popup trigger={<p className="toNewUser">Usuń konto</p>}  modal>
          <UserDeletePopup />
        </Popup>
      </div>
      <div className="userOrder">
      <h1>Historia zamówień</h1>
        <p>Pobranie i wyświetlenie danych o zamówieniach użytkownika</p>
      </div>    
    </div>
  );
};
export default User;