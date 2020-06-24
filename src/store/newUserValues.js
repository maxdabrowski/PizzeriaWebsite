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
export const SET_TRY_SEND = "SET_TRY_SEND";


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
  agree: true,
  nameAvailable: true,
  nameError:true,
  passwordError:true,
  firstNameError:true,
  lastNameError:true,
  townError:true,
  streetError:true,
  streetNumberError:true,
  telError:true,
  mailError:true,
  trySend: false,
  type: 'NEW',

};

export default (state = initialState, action) => {
  switch(action.type){
    case SET_USER_NAME: {
      const setUserName = action.payload;
      const reg = new RegExp("^[a-zA-Ząćęłńóśżź]+$");
      const error = !reg.test(action.payload);
      return{
        ...state,
        name : setUserName,
        nameError: error,
      };
    } case SET_USER_PASSWORD: {
      const setUserPassword = action.payload;
      const reg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
      const error = !reg.test(action.payload);
      return{
        ...state,
        password: setUserPassword,
        passwordError: error,
      };
    } case SET_USER_FIRST_NAME: {
      const setUserFirstName = action.payload;
      const reg = new RegExp("^[a-zA-Ząćęłńóśżź]+$");
      const error = !reg.test(action.payload);
      return{
        ...state,
        firstName: setUserFirstName,
        firstNameError: error,
      };
    } case SET_USER_LAST_NAME: {
      const setUserLastName = action.payload;
      const reg = new RegExp("^[a-zA-Ząćęłńóśżź-]+$");
      const error = !reg.test(action.payload);
      return{
        ...state,
        lastName: setUserLastName,
        lastNameError: error,
      };
    } case SET_USER_TOWN: {
      const setUserTown = action.payload;
      const townReplace = action.payload.replace(" ","_");
      const reg = new RegExp("^[a-zA-Ząćęłńóśżź._-]+$");
      const error = !reg.test(townReplace);
      return{
        ...state,
        town: setUserTown,
        townError: error,
      };
    } case SET_USER_STREET: {
      const setUserStreet = action.payload;
      const streetReplace = action.payload.replace(" ","_");
      const reg = new RegExp("^[a-zA-Ząćęłńóśżź._-]+$");
      const error = !reg.test(streetReplace);
      return{
        ...state,
        street: setUserStreet,
        streetError: error,
      };
    } case SET_USER_STREET_NUMBER: {
      const setUserStrretNumber = action.payload;
      const reg = new RegExp("^[0-9/,]+$");
      const error = !reg.test(action.payload);
      return{
        ...state,
        streetNumber: setUserStrretNumber,
        streetNumberError: error,
      };
    } case SET_USER_TEL: {
      const setUserTel= action.payload;
      const reg = new RegExp("[0-9]{9}");
      const error = !reg.test(action.payload);
      return{
        ...state,
        tel: setUserTel,
        telError: error,
      };
    } case SET_USER_MAIL: {
      const setUserMail = action.payload;
      const reg = new RegExp("^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$");
      const error = !reg.test(action.payload);
      return{
        ...state,
        mail: setUserMail,
        mailError: error
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
        agree: true,
        nameAvailable: true,
        nameError:true,
        passwordError:true,
        firstNameError:true,
        lastNameError:true,
        townError:true,
        streetError:true,
        streetNumberError:true,
        telError:true,
        mailError:true,
        trySend: false,
        type: 'NEW',
      };
    } 

    case SET_TRY_SEND: {
      return{
        ...state,
        trySend: true,
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
        agree: false,
        nameAvailable: true,
        nameError:false,
        passwordError:false,
        firstNameError:false,
        lastNameError:false,
        townError:false,
        streetError:false,
        streetNumberError:false,
        telError:false,
        mailError:false,
        trySend: false,
        type: 'UPDATE'
      };
    } 
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
