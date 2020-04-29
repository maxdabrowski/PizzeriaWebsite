import React from "react";
import "../styles/Contact.css";
import CV from "../images/CV.pdf";

const Contact = () => {
  return (
    <div className="contact">
      <p className="contactHeader">
        Obecnie jestem na etapie szukania pierwszej pracy lub stażu jako
        frontend developer, najbardziej chciałbym rozwijać się w technologi
        React. Jeżeli spodobało Ci się moje portfolio oraz projety i
        chciałbyś/chciałabyś się ze mną skontaktować, zapraszam, jestem otwarty
        na propozycje. Również chętnie wysłucham wszystkich uwag i porad.
        Kontakt do mnie znajdzesz poniżej. Pozdrawiam.
        <br />
        <p className="signature">Maksymilian Dąbrowski</p>
      </p>
      <ul className="contactList">
        <li>
          <i class=" icon fas fa-phone-square" />
          +48 723325576
        </li>
        <li>
          <i class="icon fas fa-envelope-square" />
          maksymilian.dabrowski93@gmail.com
        </li>
        <li>
          <a
            className="contactLink"
            href="https://www.linkedin.com/in/maksymilian-d%C4%85browski-65ba04183/"
            target="_blank"
          >
            <i class=" icon fab fa-linkedin" />
            Linkedin
          </a>
        </li>
        <li>
          <a
            className="contactLink"
            href="https://www.facebook.com/maksymilian.dabrowski.3"
            target="_blank"
          >
            <i class=" icon fab fa-facebook-square" />
            Facebook
          </a>
        </li>
        <li>
          <a className="contactLink" href={CV} target="_blank">
            <i class=" icon fas fa-file-pdf" />
            CV w formacie PDF
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
