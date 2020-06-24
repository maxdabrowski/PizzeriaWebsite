import React from "react";
import {useDispatch} from "react-redux";
import { ADD_DRINK_ORDER } from "../../store/order";

const Drink = props => {

  const{name, size, price}= props.drink;
  const dispatch = useDispatch();

  //dodawanie zamówienia do Store
  const addDrinkOrder = (drinkName,drinkSize,drinkPrice) =>{
    const newDrinkOrder = {
      drink: drinkName,
      size: drinkSize,
      price: drinkPrice
    }
    dispatch({type:ADD_DRINK_ORDER, payload:newDrinkOrder})
  };

  return (
    <div className="element">
      <p className="elementName">{name}</p>
      <table>
        <tbody>
          <tr className='row'>
            <td>mały</td>
            <td>{size[0]}</td>
            <td>{price[0]} zł</td> 
            <td title="Dodaj do zamówienia" onClick={() => addDrinkOrder(name,size[0],price[0])}><i className="fas fa-plus-square"></i></td>  
          </tr>
          <tr  className='row'>
            <td>duży</td>
            <td>{size[1]}</td>
            <td>{price[1]} zł</td>
            <td title="Dodaj do zamówienia" onClick={() => addDrinkOrder(name,size[1],price[1])}><i className="fas fa-plus-square"></i></td>         
          </tr>
        </tbody>
      </table>  
      <hr className='lineInsite'/>
    </div>
  );
};

export default Drink;