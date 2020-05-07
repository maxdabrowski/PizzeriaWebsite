import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import "../styles/ProjectsList.css";
import{ADD_DRINK,ADD_PIZZA} from "../store/menu";
import Pizza from "./Pizza";
import Drink from "./Drink";

//import Project from "./Project";

const Menu = () =>{ 

  //const dispatch = useDispatch();
 // const pizzas = useSelector(state => state.menu.pizzas);
 // const drinks = useSelector(state => state.menu.drinks);

  //pobranie i dodanie do Stora pizzy z API 
  /*useEffect(()=>{
    fetch('https://cessarepizza.herokuapp.com/menu/pizza')
    .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bład wyszukiwania");
      })
      .then(response => {
        return response.json()})
      .then(data =>{
          dispatch({type:ADD_PIZZA, payload: data})  
      })
  });

  //pobranie i dodanie do Stora napojów z API 
  useEffect(()=>{
    fetch('https://cessarepizza.herokuapp.com/menu/drink')
    .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bład wyszukiwania");
      })
      .then(response => {
        return response.json()})
      .then(data =>{
          dispatch({type:ADD_DRINK, payload: data})  
      })
  });*/

    const pizzas = useSelector(state => state.menu.pizzas);
    const drinks = useSelector(state => state.menu.drinks);
    console.log(pizzas);
    console.log(drinks);
   /* const pizzasList = pizzas.map(onePizza => (
      <li key={onePizza._id}>
        <Pizza pizza={onePizza} />
      </li>
    ));

    const drinksList = drinks.map(oneDrink => (
      <li key={oneDrink._id}>
        <Drink drink={oneDrink} />
      </li>
    ));
*/
  return (
    <div className="products">
      <p className="projectsFooter">pizze kurła</p>
      <p className="projectsFooter">napoje kurła</p>
    </div>
  );
};

export default Menu;