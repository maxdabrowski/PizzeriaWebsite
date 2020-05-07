export const ADD_PIZZA = "ADD_PIZZA";
export const ADD_DRINK = "ADD_DRINK";


const initialState = {
  pizzas: [], 
  drinks: []
};

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_PIZZA: {
      const newPizzas = action.payload;
      return{
        ...state,
        pizzas:newPizzas
      };
    }
    case ADD_DRINK: {
      const newDrinks = action.payload;
      return{
        ...state,
        drinks:newDrinks
      };
    }
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};