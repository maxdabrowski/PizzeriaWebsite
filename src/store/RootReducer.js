import {combineReducers} from "redux";
//import reducer from "./reducer";
import menu from "./menu";

const rootReducer = combineReducers({
  menu
  //po przecinku kolejne reducery 
});

export default rootReducer;