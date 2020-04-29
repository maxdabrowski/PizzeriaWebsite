import React from "react";
import "../styles/ProjectsList.css";
import Project from "./Project";

const projects = [
  {
    id: 1,
    name: "Memory Game",
    descripion:
      "Klasyczna gra memory z moimi zdjęciąmi z podróży, zagraj aby poćwiczyć zapamiętywanie, a po sparowaniu dwóch takich samych zdjęć dowiesz się coś ciekawego na temat zdjęcia.",
    image: "memoryGame",
    url: "https://maxdabrowski.github.io/memory-game/"
  },
  {
    id: 2,
    name: "Ship Battle",
    descripion:
      "Wybuchowa gra w statki. Twoim celem jest pokonanie nie byle jakiego przeciwnika jakim jest komputer i wygrana bitwy.",
    image: "shipBattle",
    url: "https://maxdabrowski.github.io/ship-battle/"
  },
  {
    id: 3,
    name: "Web Storage Diary",
    descripion:
      "Przeglądarkowy pamiętnik, który pomorze Ci uwietrznić wspomnienia każdego dnia. Dzięki zastosowaniu pamięci przeglądarki nie utracisz wpisów po  jej zamknięciu i będziesz mógł/mogła do nich zawsze wrócić.",
    image: "webDiary",
    url: "https://maxdabrowski.github.io/web-storage-diary/"
  },
  {
    id: 4,
    name: "Bussines Card",
    descripion:
      "Formularz z walidacją, dzięki któremu możesz stworzyć swoją unikalną internetową wizytówkę. ",
    image: "bussinesCard",
    url: "https://maxdabrowski.github.io/bussines-card/"
  },
  {
    id: 5,
    name: "Small Web Shop",
    descripion:
      "Mały sklep internetowy z telefonami, napisany przy pomocy zewnętrznej biblioteki 'simpleCart.js'.  ",
    image: "smallWebShop",
    url: "https://maxdabrowski.github.io/small-web-shop/"
  },
  {
    id: 6,
    name: "Form Validation",
    descripion:
      "Prosty formularz z validacją napisany w środowisku Create React App.",
    image: "formValidation",
    url: "https://maxdabrowski.github.io/Form-Validation-with-React/"
  },
  {
    id: 7,
    name: "Wheather App",
    descripion:
      "Aplikacja pogodowa, pokazująca aktulaną pogodę w wybranej przez Ciebie miejscowości, napiana w środowskiu Create React App, wykorzystująca zewnętrzne 'Weather API'.",
    image: "weatherApp",
    url: "https://maxdabrowski.github.io/Wheater-App-with-React/"
  },
  {
    id: 8,
    name: "ToDo App",
    descripion:
      "Aplikacja ToDo ulepszona o kilka bardzo przydatnych funkcjonalności.",
    image: "ToDoApp",
    url: "https://maxdabrowski.github.io/ToDo-App-with-React/"
  }
];

const Menu = () => {
  const list = projects.map(project => (
    <li key={project.id}>
      <Project project={project} />
    </li>
  ));

  return (
    <div className="products">
      <div>
        <ul>{list}</ul>
      </div>
      <p className="projectsFooter">
        Przedstawione projekty wykonałem przy pomocy kursów, książek,
        zewnętrzych bibliotek, i z duuużą pomocą wyszukiwarki Google, jednak kod
        zawsze starałem się pisać własnoręcznie. Nie są to aplikacje mogące
        podbić internet, i na pewno dużo dałoby się w nich ulepszyć, ale każda
        nawet najdalsza podróż zaczyna się od pierwszego kroku.
        <br />
        <br />
        Jeżeli chciałbyś/chciałabyś zajrzeć w kod powyższych aplikacji, oraz
        mojej strony portfolio zapraszam na mojego&nbsp;
        <a
          className="gitHub"
          href="https://github.com/maxdabrowski"
          target="_blank"
        >
          GitHuba.
        </a>
      </p>
    </div>
  );
};

export default Menu;