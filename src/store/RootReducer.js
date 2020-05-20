import {combineReducers} from "redux";
import menu from "./menu";
import order from "./order";
import user from "./user";
import loginValues from "./loginValues";
import newUserValues from "./newUserValues";

const rootReducer = combineReducers({
  menu,
  order,
  user,
  loginValues,
  newUserValues
});

export default rootReducer;