import React from "react";
import { Provider } from "react-redux";
import Store from "../store/Store";
import App from "./App";

const Wrapper = () =>{
  return(
    <Provider store={Store}>
      <App />
    </Provider>
  )
}

export default Wrapper;
