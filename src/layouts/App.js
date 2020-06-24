import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import{ADD_DRINK,ADD_PIZZA} from "../store/menu";
import { SET_OPINIONS, SET_VOTES } from "../store/opinion";

const App = () => {

  const dispatch = useDispatch();
  
  //pobranie i dodanie do Stora pizzy z API 
  useEffect(()=>{
    fetch('https://cessarepizza.herokuapp.com/api/pizza')
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
    fetch('https://cessarepizza.herokuapp.com/api/drink')
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

   //pobranie i dodanie do Stora opinii z API 
  useEffect(()=>{
    fetch('https://cessarepizza.herokuapp.com/api/opinion')
    .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bład wyszukiwania");
      })
      .then(response => {
        return response.json()})
      .then(data =>{
          dispatch({type:SET_OPINIONS, payload: data})  
      })
  });

    //pobranie i dodanie do Stora wyników głosowania z API 
    useEffect(()=>{
      fetch('https://cessarepizza.herokuapp.com/api/vote')
      .then(response => {
          if (response.ok) {
            return response;
          }
          throw Error("bład wyszukiwania");
        })
        .then(response => {
          return response.json()})
        .then(data =>{
           dispatch({type:SET_VOTES, payload: data[0]})  
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
