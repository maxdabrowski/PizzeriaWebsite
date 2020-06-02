export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_PASSWORD = "SET_USER_PASSWORD";
export const SET_USER_FIRST_NAME = "SET_USER_FIRST_NAME";
export const SET_USER_LAST_NAME = "SET_USER_LAST_NAME";
export const SET_USER_TOWN = "SET_USER_TOWN";
export const SET_USER_STREET = "SET_USER_STREET";
export const SET_USER_STREET_NUMBER = "SET_USER_STREET_NUMBER";
export const SET_USER_TEL = "SET_USER_TEL";
export const SET_USER_MAIL = "SET_USER_MAIL";
export const SET_USER_AGREE = "SET_USER_AGREE";
export const SET_USER_TYPE = "SET_USER_TYPE";
export const SET_INITIAL_USER = "SET_INITIAL_USER";
export const NAME_AVAILABLE = "NAME_AVAILABLE";
export const SET_USER_CHANGE_FORM = "SET_USER_CHANGE_FORM";


const initialState = {
  name : '',
  password: '',
  firstName: '',
  lastName: '',
  town: '',
  street: '',
  streetNumber: '',
  tel:'',
  mail:'',
  agree: false,
  nameAvailable: true,
  type: 'NEW',
};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_USER_NAME: {
      const setUserName = action.payload;
      return{
        ...state,
        name : setUserName
      };
    } case SET_USER_PASSWORD: {
      const setUserPassword = action.payload;
      return{
        ...state,
        password: setUserPassword,
      };
    } case SET_USER_FIRST_NAME: {
      const setUserFirstName = action.payload;
      return{
        ...state,
        firstName: setUserFirstName,
      };
    } case SET_USER_LAST_NAME: {
      const setUserLastName = action.payload;
      return{
        ...state,
        lastName: setUserLastName,
      };
    } case SET_USER_TOWN: {
      const setUserTown = action.payload;
      return{
        ...state,
        town: setUserTown,
      };
    } case SET_USER_STREET: {
      const setUserStreet = action.payload;
      return{
        ...state,
        street: setUserStreet,
      };
    } case SET_USER_STREET_NUMBER: {
      const setUserStrretNumber = action.payload;
      return{
        ...state,
        streetNumber: setUserStrretNumber,
      };
    } case SET_USER_TEL: {
      const setUserTel= action.payload;
      return{
        ...state,
        tel: setUserTel,
      };
    } case SET_USER_MAIL: {
      const setUserMail = action.payload;
      return{
        ...state,
        mail: setUserMail,
      };
    } case SET_USER_AGREE: {
      const setUserMail = action.payload;
      return{
        ...state,
        agree: setUserMail,
      };
    } case SET_USER_TYPE: {
      const setUserType = action.payload;
      return{
        ...state,
        type: setUserType,
      };
    }
    case NAME_AVAILABLE: {
      const setUserAgree = action.payload;
      return{
        ...state,
        nameAvailable: setUserAgree,
      };
    } 
        case SET_INITIAL_USER: {
      return{
        ...state,
        name : '',
        password: '',
        firstName: '',
        lastName: '',
        town: '',
        street: '',
        streetNumber: '',
        tel:'',
        mail:'',
        agree: false,
        nameAvailable: true
      };
    } 
    case SET_USER_CHANGE_FORM: {
      const userChange = action.payload;
      return{
        ...state,
        name : userChange.name,
        password: userChange.password,
        firstName: userChange.firstName,
        lastName: userChange.lastName,
        town: userChange.town,
        street: userChange.street,
        streetNumber: userChange.streetNumber,
        tel:userChange.tel,
        mail:userChange.mail,
        agree: true,
        nameAvailable: true,
        type: 'UPDATE',
      };
    } 
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
