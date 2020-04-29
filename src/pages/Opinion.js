import React from "react";
import "../styles/Skills.css";

const skills = [
  { id: 1, name: "HTML", image: "point_3" },
  { id: 2, name: "CSS", image: "point_3" },
  { id: 3, name: "SASS", image: "point_1" },
  { id: 4, name: "BOOTSTRAP", image: "point_2" },
  { id: 5, name: "JAVASCRIPT", image: "point_3" },
  { id: 6, name: "JQUERY", image: "point_1" },
  { id: 7, name: "REACT", image: "point_2" },
  { id: 8, name: "GIT", image: "point_2" },
  { id: 9, name: "JAVA", image: "point_1" },
  { id: 10, name: "JĘZYK ANGIELSKI", image: "point_3" }
];

const Opinion = () => {
  const list = skills.map(skill => (
    <li className="skillsItem" key={skill.id}>
      <h1>{skill.name}</h1>
      <img
        className="imgSkills"
        src={require(`../images/${skill.image}.jpg`)}
        alt="imgSkills"
      />
    </li>
  ));

  return (
    <div className="skills">
      <div>
        <ul>{list}</ul>
      </div>
      <p className="skillsFooter">
        Moja samoocena jest raczej subiektywna i pokazuję, jak sam się czuję z
        danym elementem całej układanki. Nie miałem okazji porównywać swoich
        umiejętnościami do innych, a także być ocenianym przez kogoś
        doświadczonego. Chętnie sprawdził bym swoje umiejęności. Jeśli
        chciałbyś/chciałabyś dać mi taka szansę, w ostatniej zakładce znajdziesz
        do mnie kontakt, ale najpierw rzuć okiem na moje projekty.
      </p>
    </div>
  );
};

export default Opinion;
