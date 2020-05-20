export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";


const initialState = {
  loginUser : {},
  logIn: false 
};

export default (state = initialState, action) => {
  switch(action.type){
    case LOGIN_USER: {
      const newloginUser = action.payload;
      return{
        ...state,
        loginUser : newloginUser,
        logIn: true 
      };
    }
    case LOGOUT_USER: {
      return{
        loginUser : {},
        logIn: false 
      };
    }
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
