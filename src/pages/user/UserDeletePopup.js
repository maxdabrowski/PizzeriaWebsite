import React from "react";
import "../../styles/OrderPopup.css";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Popup from "reactjs-popup";
import { LOGOUT_USER } from "../../store/user";

const UserDeletePopup = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const userID = useSelector(state => state.user.loginUser._id);

  const deleteUser = async e => {
    const response = await fetch('https://cessarepizza.herokuapp.com/api/user_delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: userID}),
    });
    const body = await response.json();
    console.log(body)
    if(body.error ==='none'){
    dispatch({type:LOGOUT_USER})
      history.push("/");
    };
  };

  return(
    <Popup trigger={<p className="toNewUser">Usuń konto</p>}  modal>
      {close => (
    <div className='modalOrder'>
      <p>Czy na pewno chcesz usunąć konto ?</p>
      <button className="button" onClick={() =>close()}>Anuluj</button>
      <button className="button" onClick={() => deleteUser()}>Tak</button>
    </div>
       )}
    </Popup>
  );
};
export default UserDeletePopup;