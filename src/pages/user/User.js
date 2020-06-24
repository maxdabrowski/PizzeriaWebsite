import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import "../../styles/User.css";
import UserDeletePopup from "./UserDeletePopup"
import UserOrder from "./UserOrder"
import { LOGOUT_USER } from "../../store/user";
import { SET_USER_TYPE, SET_INITIAL_USER } from "../../store/newUserValues";

const User= () => {
  
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector(state => state.user.loginUser);
  const userOrders = useSelector(state => state.user.orderUser);

  // lista zamówień użytkownika
  const orderList = userOrders.map(oneOrder => (
    <li key={oneOrder._id}>
      <UserOrder order={oneOrder} />
    </li>
  ));

  //zmiana typu użytkownika do zmiany formularza nowu użytkownik czy zmiana danych
  const changeUserData = async e => {
    dispatch({type: SET_USER_TYPE, payload:"CHANGE" })
    history.push("/new_user");
  };
  
  //wylogowanie się użytkownika
  const logOut = ()  => {
    dispatch({type: LOGOUT_USER})
    dispatch({type: SET_INITIAL_USER})
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
              <td>{user.town +', ul. '+ user.street +' '+ user.streetNumber}</td>
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
          <UserDeletePopup />
      </div>
      <div className="userOrder">
      <h1>Historia zamówień</h1>
      <ul>{orderList}</ul>
      </div>    
    </div>
  );
};
export default User;