import React from "react";
import "../styles/AboutMe.css";
import img5 from "../images/img5.jpg";

const AboutUs = () => {
  const paraf_1 = (
    <p>
      Cześć, nazywam się Maksymilian Dąbrowski i mam 25 lat. Z wykształcenia
      jestem magistrem, inżynierem budownictwa, hmmm to nie pomyłka, zamiast
      budować domy i projektować kolejne Warszawskie wieżowce (co cały czas też
      robię) znalazłem hobby w budowaniu aplikacji i projektowaniu stron
      internetowych. Uczę się od około roku czasu, zaczynając klasyczną ścieżką
      frontendowca, HTML, CSS i JavaScript. Wtedy myślałem że jak przerobię parę
      książek, parę kursów to już będę gość. Zauważyłem ża to tak nie działa, im
      dalej w las tym więcej drzew, im więcej się uczę tym widzę, że coraz
      więcej przydało by się umieć, trochę jak na grafice poniżej.
    </p>
  );

  const paraf_2 = (
    <p>
      Idąc tą ścieżką dalej w głąb lasu zacząłem wykorzystywać Bootstrapa,
      poznałem podstawy SASSa, najnowsze rozwiązania jakie niesie ze sobą
      ECMAScript, animacje z JQuery, a ostatnim czasem dałem się pochłonąc nauce
      Reacta (może to magia światowego giganta jakim jest Facebook że tak
      potrafi wciągnąć). Swoje pierwsze kroki zaczynam stawiać w Reduxie, który
      tworzy fajną parę z Reactem, cieżko sobie wybrobrazić bardziej udany
      związek, ale przyszłość to zweryfikuje. W międzyczasie poznałem podstawy
      Gita, bez którego znajomości niemożliwa jest praca w zespole nad większym
      projektem. Jeszcze duuużo nauki przede mną,
      <br />
      <i>
        'no fajnie, że się uczysz tego swojego JavaScripta ale prawdziwy
        programista to musi potrafić programować w backendzie'
      </i>
      <br />
      Także chcąc chociaż trochę poznac jakiegoś języka backendowego poznałem
      podstawy Javy, jednak postanowiłem rozwijać się w kierunku frontendu.
      Czego jeszcze chciałbym się nauczyć? Długo było by wymieniać i się
      rozpisywać, ale nie chciałbym żeby zabrzmiało to jak
      <br />
      <i>
        "chętnie poleciałbym w podróż dookoła świata ale mama mi nie pozwala"
      </i>
      <br />
      Jak się nauczę, to na pewnio się pochwalę. Chciałbym mieć możliwość uczyć
      się od lepszych od siebie, uważam że lepiej być najgorszym wśród
      najlepszych, bo wtedy jest możliwość rozwoju i doskonalenia siebie, czyli
      tego na czym mi najbardziej zależy. Chciałbym rozwijać się dalej, i myślę
      że najlepszym sposobem byłaby praca na realnych projektach z
      doświadczonymi kolegami i koleżankami.
    </p>
  );

  return (
    <div className="aboutMe">
      {paraf_1}
      <img className="imgAboutMe" src={img5} alt="img" />
      {paraf_2}
    </div>
  );
};

export default AboutUs;
