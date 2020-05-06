import React from "react";
import "../styles/ProjectsList.css";
//import Project from "./Project";

class Menu extends React.Component {

  state = {
    pizza: [],
    drink: []
  };

  handlePizza = e =>{
    const ApiRequest = 'https://cessarepizza.herokuapp.com/menu/pizza';

    fetch(ApiRequest)
    .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bład wyszukiwania");
      })
      .then(response => response.json())
      .then(res =>{
        console.log(res)
        this.setState({
          pizzz: res,
        })
        console.log(this.state.pizza)
      })

    }
  
 /* const list = projects.map(project => (
    <li key={project.id}>
      <Project project={project} />
    </li>
  ));
*/
render(){
  return (
    <div className="products">
      <p className="projectsFooter">
          menu
      </p>
      <button onClick={this.handlePizza}>jebnij tu</button>
    </div>
  );
};
};

export default Menu;