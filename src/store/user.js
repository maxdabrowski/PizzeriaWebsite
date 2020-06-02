export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_ORDER = "USER_ORDER";



const initialState = {
  loginUser : {},
  orderUser: [],
  logIn: false 
};

export default (state = initialState, action) => {
  switch(action.type){
    case LOGIN_USER: {
      const newloginUser = action.payload.user[0];
      const newUserOrder = action.payload.orders;
      return{
        ...state,
        loginUser : newloginUser,
        orderUser: newUserOrder,
        logIn: true 
      };
    }
    case LOGOUT_USER: {
      return{
        loginUser : {},
        logIn: false,
        orderUser: [],
      };
    }
    case USER_ORDER: {
      const newUserOrder = action.payload;
      return{
        ...state,
        orderUser : newUserOrder,
      };
    }
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
