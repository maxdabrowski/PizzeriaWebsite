import React from "react";
import {useSelector} from "react-redux";
import OrderPopup from "./OrderPopup"

const Cart = () => {

  const order = useSelector(state => state.order);

  //deklaracja zmiennych
  let pizzasList;
  let drinksList;
  let summaryPrice = 5;

  //sprawdzenie, czy tabela nie jest pusta
  if(order.pizzaOrder.length !== 0){

    //sumowanie ceny
    order.pizzaOrder.forEach(el => {
      summaryPrice += Number(el.price)   
    });

    //tabela z zamówionymi pizzami
    pizzasList = order.pizzaOrder.map((pizza,index) => (
      <tr key={index}> 
        <td>{pizza.pizza}</td>
        <td>{pizza.size} cm</td>
        <td>{pizza.price} zł</td> 
      </tr>
    ));
  };

  //tabela z zamówionymi napojami
  if(order.drinkOrder.length !== 0){
 
    //sumowanie ceny
    order.drinkOrder.forEach(el => {
    summaryPrice += Number(el.price)  
    });

    drinksList = order.drinkOrder.map((drink,index)=> (
      <tr key={index}>
        <td>{drink.drink}</td>
        <td>{drink.size} cm</td>
        <td>{drink.price} zł</td> 
      </tr>
    ));
  };

  return (
    <div className='cartList'>
      <p className="cartBold cartHeader">TWOJE ZAMÓWIENIE</p>
      <p className="cartDescript">Dadaj jedzenie i napoje z menu i sprawdź zamówienie</p>
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
      <div className="summaryCart">
        <OrderPopup />
      <p className="cartBold">SUMA: {summaryPrice} zł</p>
      </div>
      </div>
  );
};

export default Cart;