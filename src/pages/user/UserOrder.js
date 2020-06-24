import React from "react";

const UserOrder = props => {

const{pizza, pizzaSize, drink, drinkSize, adress, created, toPay, serveOrder}= props.order;
const orderId = props.order._id.substr(20);

//lista pizzy
const pizzaList = pizza.map( (el, index) => (
  <li key={el.index}>
    {el +', '+ (pizzaSize[index] + ' cm')} 
  </li>
));

//lista napojów
const drinkList = drink.map( (el, index) => (
  <li key={el.index}>
    {el + (drinkSize[index])} 
  </li>
));

  return (
    <div className="element">
      <table>
        <tbody>
          <tr className='row' >
            <td>Numer zamówienia:</td>
            <td>{orderId}</td>
          </tr>
          <tr className='row' >
            <td>Data zamówienia:</td>
            <td>{created}</td>
          </tr>
          <tr className='row' >
            <td>Adres dostawy:</td>
            <td>{adress}</td>
          </tr>
          <tr className='row' >
            <td>Zamówienie:</td>
            <td>{pizzaList}</td>
          </tr>
          {drinkList.length === 0?"":
          <tr className='row' >
            <td></td>
            <td>{drinkList}</td>
          </tr>}   
          <tr className='row' >
            <td>Zapłacono:</td>
            <td> {toPay} zł</td>
          </tr>  
          <tr className='row' >
            <td>Status:</td>
            <td>{serveOrder?<span className='realized'>ZREALIZOWANO</span>:<span className='inRealized'>W TRAKCIE REALIZACJI</span>}</td>
          </tr>     
        </tbody>
      </table>
      <hr></hr>
    </div>
  );
};

export default UserOrder;