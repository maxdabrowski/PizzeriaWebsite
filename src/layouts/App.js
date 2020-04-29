import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";

class App extends Component {
  render() {
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
}
export default App;
