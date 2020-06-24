import React from "react";
import {useSelector} from "react-redux";
import "../../styles/Menu.css";
import Pizza from "./Pizza";
import Drink from "./Drink";
import Cart from "./Cart";

const Menu = () =>{ 

  //pobranie danych ze stora
  const pizzas = useSelector(state => state.menu.pizzas);
  const drinks = useSelector(state => state.menu.drinks);
  
  // lista pizzy
  const pizzasList = pizzas.map(onePizza => (
    <li key={onePizza._id}>
      <Pizza pizza={onePizza} />
    </li>
  ));

  // lista napojów
  const drinksList = drinks.map(oneDrink => (
    <li key={oneDrink._id}>
      <Drink drink={oneDrink} />
    </li>
  ));

  return (
    <div className="menu">
      <h1>NASZE MENU </h1>
      <div className="menuInsite">
        <div className="menuList">
          <div className='menuNav'>
            <a href="#pizzaList" className="pizzaNav">MENU PIZZE</a>
            <a href="#drinkList" className="drinkNav">MENU NAPOJE</a>
          </div>
          <p className="headerList bold" id="pizzaList">MENU PIZZA</p>
            <ul>{pizzasList}</ul>
          <p className="headerList bold" id="drinkList" >MENU NAPOJE</p>
            <ul>{drinksList}</ul>
        </div>
        <div className="cart">
          <Cart/>
        </div>
      </div>
    </div>
  );
};

export default Menu;