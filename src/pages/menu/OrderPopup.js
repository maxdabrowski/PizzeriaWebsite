import React from "react";
import "../../styles/OrderPopup.css";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { DELETE_PIZZA_ORDER, DELETE_DRINK_ORDER, SET_SAUCE, SET_ORDER_ERROR, SET_ORDER_MESSAGE, SET_INITIAL_ORDER} from "../../store/order";
import { USER_ORDER } from "../../store/user";
import Popup from "reactjs-popup";

const OrderPopup = () => {

  const order = useSelector(state => state.order);
  const user = useSelector(state => state.user);
  let history = useHistory();

  //deklaracja zmiennych
  let pizzasList;
  let drinksList;
  let summaryPrice = 5;
  let garlicSauce = order.sauce[0];
  let tomatoSauce = order.sauce[1];

  const dispatch = useDispatch();

  //sprawdzenie, czy tabela nie jest pusta
  if(order.pizzaOrder.length !== 0){

    //sumowanie ceny pizzy
    order.pizzaOrder.forEach(el => {
      summaryPrice += Number(el.price)  
    });

    //tabela z zamówionymi pizzami
    pizzasList = order.pizzaOrder.map((pizza,index) => (
      <tr key={index}> 
        <td>{pizza.pizza}</td>
        <td>{pizza.size} cm</td>
        <td>{pizza.price} zł</td>
        <td><button className="button" onClick={() => deleteOrder('pizza',index)}>Usuń</button></td>
      </tr>
    ));
  };

  //tabela z zamówionymi napojami
  if(order.drinkOrder.length !== 0){

    //sumowanie ceny napojów
    order.drinkOrder.forEach(el => {
      summaryPrice += Number(el.price)
    });

    //tabela z napojami
    drinksList = order.drinkOrder.map((drink,index)=> (
      <tr key={index}>
        <td>{drink.drink}</td>
        <td>{drink.size} cm</td>
        <td>{drink.price} zł</td> 
      <td><button className="button" onClick={() => deleteOrder('drink',index)}>Usuń</button></td>
      </tr>
    ));
  };

  //usuwanie pizzy z Store.order.pizza
  const deleteOrder = (type,index) =>{
    if(type === 'pizza'){
      dispatch({type:DELETE_PIZZA_ORDER, payload:index})
    }else if(type ==='drink'){
      dispatch({type:DELETE_DRINK_ORDER, payload:index})
    }
  };

  //zmiana liczby sosów
  const changeSauce = (type,sauce) =>{
    const actionType = {
      type: type,
      sauce: sauce
    };
    dispatch({type:SET_SAUCE, payload: actionType})
  };

  //dodawanie wiadomości z textarea do stora
  const changeMessage = (e) => {
    dispatch({type: SET_ORDER_MESSAGE, payload:e.target.value})
  };

  const makeOrder = async e => {

    if(user.logIn){
    const response = await fetch('https://cessarepizza.herokuapp.com/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({order}),
    });
    const body = await response.json();
    dispatch({type:USER_ORDER, payload: body.orders})
    dispatch({type:SET_INITIAL_ORDER})
    history.push("/user");

    }else{
      dispatch({type:SET_ORDER_ERROR, payload: 'Zaloguj się lub załóż nowe konto aby złożyć zamówienie'})
    }
  };



  //jeżeli sosów jest więcej niż 2 x ilość sztuk pizzy to zwiększamy cene zs dodatkowy sos 3 zł
  if((order.sauce[0] + order.sauce[1]) > (order.pizzaOrder.length*2)){
    const saucePrice =  ((order.sauce[0] + order.sauce[1]) - (order.pizzaOrder.length*2))*3;
    summaryPrice = summaryPrice +saucePrice;
  };

  return(
    <Popup trigger={<button className="button"> ZAMÓWIENIE </button>} modal>
    {close => (
      <div className='modalOrder'>
      <a className="close" onClick={() =>close()}>
          &times;
        </a>
      <p className="cartBold">TWOJE ZAMÓWIENIE</p>
      <p className="cartDescript">Do każdego zamóWienia doliczamy koszt dostawy w wysokości 5zł</p>
      <table>
        <tbody>
        <tr>
          <td>Dostawa</td>
          <td></td>
          <td>5 zł</td> 
        </tr>
          {pizzasList}
          {drinksList}
        </tbody>
      </table>
      <div className='souceOrder'>
        <p className="cartDescript">do każdej pizzy dodajemy dwa sosy, możesz zmieniać ilość, dodatkowy sos kosztuje 3 zł</p> 
        <table>
          <tbody>
            <tr>
              <td>Sos czosnkowy</td>
              <td><span onClick={() => changeSauce('minus','garlic')}><i className="fas orderSauce fa-minus-circle" ></i></span></td>
              <td>{garlicSauce}</td>
              <td><span onClick={() => changeSauce('plus','garlic')}><i className="fas orderSauce fa-plus-circle" ></i></span></td>           
            </tr>
            <tr>
              <td>Sos pomidorowy</td>
              <td><span onClick={() => changeSauce('minus','tomato')}><i className="fas orderSauce fa-minus-circle"></i></span></td>
              <td>{tomatoSauce}</td>
              <td><span onClick={() => changeSauce('plus','tomato')}><i className="fas orderSauce fa-plus-circle" ></i></span></td>           
            </tr>
          </tbody>
        </table>
        </div>
        <div className="summaryOrderPopup">
        <p className="cartDescript"> Jeżeli masz jakieś życzenia, uwagi napisz je tutaj:</p>
        <textarea className="orderTextarea" onChange={(e) => changeMessage(e)}></textarea>  
          <p className="cartBold">SUMA: {summaryPrice} zł</p>
          <button className="button" onClick={() => makeOrder()}>ZAMAWIAM</button>
  <p className="loginError">{order.orderError}</p>
          </div>
    </div>

    )}
  </Popup>



  );
};
export default OrderPopup;