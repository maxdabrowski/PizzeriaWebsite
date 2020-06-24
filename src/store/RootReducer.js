import {combineReducers} from "redux";
import menu from "./menu";
import order from "./order";
import user from "./user";
import loginValues from "./loginValues";
import newUserValues from "./newUserValues";
import opinion from "./opinion";

const rootReducer = combineReducers({
  menu,
  order,
  user,
  loginValues,
  newUserValues,
  opinion
});

export default rootReducer;