import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">  
      <div>
        <h1>GODZINY OTWARCIA</h1>
        <table>
          <tbody>
          <tr>
            <td>Poniedziałek</td>
            <td>11:00 - 21:00</td>
          </tr>
          <tr>
            <td>Wtorek</td>
            <td>11:00 - 21:00</td>
          </tr>
          <tr>
            <td>Środa</td>
            <td>11:00 - 21:00</td>
          </tr>
          <tr>
            <td>Czwartek</td>
            <td>11:00 - 21:00</td>
          </tr>
          <tr>
            <td>Piątek</td>
            <td>11:00 - 22:00</td>
          </tr>
          <tr>
            <td>Sobota</td>
            <td>11:00 - 22:00</td>
          </tr>
          <tr>
            <td>Niedziela</td>
            <td>11:00 - 21:00</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h1>LOKALIZACJA</h1>
        <p>Plac Tadeusza Kościuszki 9</p>
        <p>97-200 Tomaszów Mazowiecki</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1353.347384478148!2d20.004523539446637!3d51.53064189362825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471985258ac53dd3%3A0x27838cefc691b5d!2splac%20Tadeusza%20Ko%C5%9Bciuszki%209%2C%2097-200%20Tomasz%C3%B3w%20Mazowiecki!5e0!3m2!1spl!2spl!4v1588510197256!5m2!1spl!2spl" frameBorder="0" ></iframe>
      </div>
      <div>
        <h1>KONTAKT</h1> 
        <p>Zadzwoń i zamów: +48 723 325 576</p>  
        <p>Napisz: pizzeria@cessare.com</p>
      </div>
    </div>
  );
};

export default Contact;
