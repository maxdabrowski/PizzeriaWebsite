import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import{ADD_DRINK,ADD_PIZZA} from "../store/menu";

const App = () => {

  const dispatch = useDispatch();
  
  //pobranie i dodanie do Stora pizzy z API 
  useEffect(()=>{
    fetch('https://cessarepizza.herokuapp.com/menu/pizza')
    .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bład wyszukiwania");
      })
      .then(response => {
        return response.json()})
      .then(data =>{
          dispatch({type:ADD_PIZZA, payload: data})  
      })
  });

  //pobranie i dodanie do Stora napojów z API 
  useEffect(()=>{
    fetch('https://cessarepizza.herokuapp.com/menu/drink')
    .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bład wyszukiwania");
      })
      .then(response => {
        return response.json()})
      .then(data =>{
          dispatch({type:ADD_DRINK, payload: data})  
      })
  });

  return (
    <Router>
      <div className="app">
        <aside>{<Navigation />}</aside>
        <header>{<Header />}</header>
        <section className="page">{<Page />}</section>
      </div>
    </Router>
  );
}
export default App;
