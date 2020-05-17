export const ADD_PIZZA_ORDER = "ADD_PIZZA_ORDER";
export const ADD_DRINK_ORDER = "ADD_DRINK_ORDER";
export const DELETE_PIZZA_ORDER = "DELETE_PIZZA_ORDER";
export const DELETE_DRINK_ORDER = "DELETE_DRINK_ORDER";
export const SET_SAUCE = "SET_SAUCE";

const initialState = {
  pizzaOrder: [], 
  drinkOrder: [],
  //tablica, z ilością sosów, pierwszy element to sos czosnkowy, drugi sos pomidorowy
  sauce:[0,0],
};

export default (state = initialState, action) => {
  switch(action.type){

    case ADD_PIZZA_ORDER: {
      const newPizzasOrder = [...state.pizzaOrder, action.payload];
      return{
        ...state,
        pizzaOrder: newPizzasOrder,
        sauce:[newPizzasOrder.length,newPizzasOrder.length]
      };
    }

    case DELETE_PIZZA_ORDER: {
      let newPizzasOrder = [...state.pizzaOrder];
      newPizzasOrder.splice(action.payload,1);
      return{
        ...state,
        pizzaOrder: newPizzasOrder,
        sauce:[newPizzasOrder.length,newPizzasOrder.length]
      };
    }

    case ADD_DRINK_ORDER: {
      const newDrinksOrder = [...state.drinkOrder, action.payload];
      return{
        ...state,
        drinkOrder: newDrinksOrder
      };
    }

    case DELETE_DRINK_ORDER: {
      let newDrinksOrder = [...state.drinkOrder];
      newDrinksOrder.splice(action.payload,1);
      return{
        ...state,
        drinkOrder: newDrinksOrder
      };
    }

    case SET_SAUCE: {
      const type = action.payload.type;
      const sauce = action.payload.sauce;

      let newGarlicSauce = state.sauce[0];
      let newTomatoSauce = state.sauce[1];

      if(type === 'plus'){
        if(sauce === 'garlic'){
          newGarlicSauce += 1;
        }else if(sauce === 'tomato'){
          newTomatoSauce += 1;
        }
      }

      if(type === 'minus'){
        if(sauce === 'garlic'){
          if(newGarlicSauce !==0){
            newGarlicSauce -= 1;
          }
        }else if(sauce === 'tomato'){
          if(newTomatoSauce !==0){
            newTomatoSauce -= 1;
          }
        }
      }
      
      return{
        ...state,
        sauce:[newGarlicSauce,newTomatoSauce]
      };
    }
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
