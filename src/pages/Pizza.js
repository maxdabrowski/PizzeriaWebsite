import React from "react";
import {useDispatch} from "react-redux";
import { ADD_PIZZA_ORDER } from "../store/order";

const Pizza = props => {

  const{name, ingredients, size, price}= props.pizza;
  const dispatch = useDispatch();

  //zapisanie składników w string z przecinkami
  let ingredientsString = "sos, ";
  
  ingredients.forEach(el => {
    ingredientsString = ingredientsString + el + ', ' 
  });
  ingredientsString =ingredientsString + ' oregano';

  //dodawanie zamówienia do Store order.PizzaOrder
  const addPizzaOrder = (pizzaName,pizzaSize,pizzaPrice) =>{
    const newPizzaOrder = {
      pizza: pizzaName,
      size: pizzaSize,
      price: pizzaPrice
    };
    dispatch({type:ADD_PIZZA_ORDER, payload:newPizzaOrder})
  };

  return (
    <div className="element">
      <p className="elementName">{name}</p>
      <p className="elementIngr">{ingredientsString}</p>
      <table>
        <tbody>
          <tr className='row' >
            <td>mała</td>
            <td>{size[0]} cm</td>
            <td>{price[0]} zł</td>  
            <td title="Dodaj do zamówienia" onClick={() => addPizzaOrder(name,size[0],price[0])}><i className="fas fa-plus-square"></i></td>
          </tr>
          <tr  className='row'>
            <td>średnia</td>
            <td>{size[1]} cm</td>
            <td>{price[1]} zł</td>
            <td title="Dodaj do zamówienia" onClick={() => addPizzaOrder(name,size[1],price[1])}><i className="fas fa-plus-square"></i></td>         
          </tr>
          <tr  className='row'>
            <td>duża</td>
            <td>{size[2]} cm</td>
            <td>{price[2]} zł</td>
            <td title="Dodaj do zamówienia" onClick={() => addPizzaOrder(name,size[2],price[2])} ><i className="fas fa-plus-square"></i></td>
          </tr>
        </tbody>
      </table>
      <hr className='lineInsite'/>
    </div>
  );
};

export default Pizza;