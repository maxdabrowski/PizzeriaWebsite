import React from "react";
import "../styles/OrderPopup.css";
import {useSelector, useDispatch} from "react-redux";
import { DELETE_PIZZA_ORDER, DELETE_DRINK_ORDER, SET_SAUCE} from "../store/order";

const OrderPopup = () => {
  //pobranie store.order
  const order = useSelector(state => state.order);

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

    //tavbela z napojami
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

  //jeżeli sosów jest więcej niż 2 x ilość sztuk pizzy to zwiększamy cene zs dodatkowy sos 3 zł
  if((order.sauce[0] + order.sauce[1]) > (order.pizzaOrder.length*2)){
    const saucePrice =  ((order.sauce[0] + order.sauce[1]) - (order.pizzaOrder.length*2))*3;
    summaryPrice = summaryPrice +saucePrice;
  };

  return(
    <div className='modalOrder'>
      <p className="cartBold">TWOJE ZAMÓWIENIE</p>
      <p className="cartDescript">Do każdego zamóWienia doliczamy koszT dostawy w wysokości 5zł</p>
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
          <p className="cartBold">SUMA: {summaryPrice} zł</p>
          <button className="button">ZAMAWIAM</button>
          </div>
    </div>
  );
};
export default OrderPopup;