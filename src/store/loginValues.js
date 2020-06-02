export const SET_LOGIN_NAME = "SET_LOGIN_NAME";
export const SET_LOGIN_PASSWORD = "SET_LOGIN_PASSWORD";
export const SET_INITIAL_LOGIN = "SET_INITIAL_LOGIN";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

const initialState = {
  name : '',
  password: '',
  error:''
};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_LOGIN_NAME: {
      const setLoginName = action.payload;
      return{
        ...state,
        name : setLoginName
      };
    } case SET_LOGIN_PASSWORD: {
      const setLoginPassword = action.payload;
      return{
        ...state,
        password: setLoginPassword,
      };
    }case SET_INITIAL_LOGIN: {
      return{
        ...state,
        name : '',
        password: '',
        error:''
      };
    } case SET_LOGIN_ERROR: {
      const setLoginError = action.payload;
      return{
        ...state,
        error: setLoginError,
      };
    }
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
