import React from "react";
import "../styles/AboutUs.css";
import img from "../images/aboutUs.jpg";

const AboutUs = () => {
  const paraf_1 = (
    <p>
      Pizza to jedno z tych dań, które uwielbiamy wszyscy. Doskonale sprawdza się jako danie obiadowe, pożywna kolacja, czy przekązaka na imprezę.
      Cessare Pizza oferują najlepszą, najsmaczniejsza i co równie ważne w przystępnej cenie pizzę w Tomaszowie Mazowieckim.
      Posiadamy już ponad 10-letnie doświadczenie w tworzeniu wszelkiego rodzaju dań, jednak w naszych sercach zawsze najbliżej była pizza.
      Posiadamy szerokie i i różnorodne menu. W naszych pizzach używamy zawsze najlepszej jakości składników, a zaopatrując się u naszych zaprzyjaźnionych lokalnych dostawców wspieramy naszą lokalną produkcję oraz uprawy.
      Nasi pracownicy to wykwalifikowani, mili, młodzi, pomocni ludzie, kórzy zawsze z uśmiechem na twarzy Państwu pomogą.
      Nasz lokal znajduje się w samym centrum Tomaszowa Mazowieckiego, posiada piękne i klimatyczne wnętrze ale umożliwiamy również możliwość zamówienia z dowozem, 
      wystarczy do nas zadzwonić, lub zalogować na naszej stronie i zamówić w wygodny sposób on-line. Zapraszamy do zapoznania się z naszą ofertą i do wizyty w lokalu lub zamówienia z dowozem.
    </p>
  );

  return (
    <div className="aboutUs">
      {paraf_1}
      <img className="imgAboutUs" src={img} alt="img" />
    </div>
  );
};

export default AboutUs;
