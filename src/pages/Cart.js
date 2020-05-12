import React from "react";
import {useSelector} from "react-redux";

const Cart = () => {
  //pobranie store.order
  const order = useSelector(state => state.order);

  //deklaracja zmiennych
  let pizzasList;
  let drinksList;
  let summaryPrice = 0;


  //sprawdzenie, czy tabela nie jest pusta
  if(order.pizzaOrder.length !== 0){

  //sumowanie ceny
  order.pizzaOrder.forEach(el => {
    summaryPrice += Number(el.price)
    
  });

  //tabela z zamówionymi pizzami
 pizzasList = order.pizzaOrder.map(pizza => (
  <tr key={Math.random()}> 
    <td>{pizza.pizza}</td>
    <td>{pizza.size} cm</td>
    <td>{pizza.price} zł</td> 
</tr>
));
}

//tabela z zamówionymi napojami
if(order.drinkOrder.length !== 0){
 
  order.drinkOrder.forEach(el => {
    summaryPrice += Number(el.price)
    
  });

 drinksList = order.drinkOrder.map(drink=> (
  <tr key={Math.random()}>
    <td>{drink.drink}</td>
    <td>{drink.size} cm</td>
    <td>{drink.price} zł</td> 
  </tr>
));
}



  return (
    <div className='cartList'>
      <p className="cartBold">TWOJE ZAMÓWIENIE</p>
      <p className="cartDescript">Dadaj jedzenie i napoje z menu i sprawdź zamówienie</p>
      <table>
        <tbody>
          {pizzasList}
          {drinksList}
        </tbody>
      </table>
      <div className="summaryCart">
      <p className="button">ZAMÓWIENIE</p>
      <p className="cartBold">SUMA: {summaryPrice} zł</p>
      </div>


      </div>
  );
};

export default Cart;