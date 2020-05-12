export const ADD_PIZZA_ORDER = "ADD_PIZZA_ORDER";
export const ADD_DRINK_ORDER = "ADD_DRINK_ORDER";

const initialState = {
  pizzaOrder: [], 
  drinkOrder: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_PIZZA_ORDER: {
      const newPizzasOrder = [...state.pizzaOrder, action.payload];
      return{
        ...state,
        pizzaOrder: newPizzasOrder
      };
    }
    case ADD_DRINK_ORDER: {
      const newDrinksOrder = [...state.drinkOrder, action.payload];
      return{
        ...state,
        drinkOrder: newDrinksOrder
      };
    }
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
