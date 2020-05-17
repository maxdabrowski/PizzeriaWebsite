import React from "react";
import "../styles/NewUser.css";


const NewUser = () => {

  const newUserHandle = (e) =>{
    e.preventDefault();
  console.log("logowanie kurła")
 
  };

  return(
    <div className='newUser'>
      <p>Dzięki założeniu konta będzissz mógł zamawiać online</p>
    <form className='form'>
      <div className='formRow'>
        <label htmlFor='userName'>Nazwa użytkownika:</label>
        <input type='text' required name='userName' id='userName'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userPassword'>Hasło:</label>
        <input type='password' required name='userPassword' id='userPassword'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userFirstName'>Imię:</label>
        <input type='text' required name='userFirstName' id='userFirstName'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userLastName'>Nazwisko:</label>
        <input type='text' required name='userLastName' id='userLastName'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userPlace'>Miejscowość:</label>
        <input type='text' required name='userPlace' id='userPlace'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userStreet'>Ulica:</label>
        <input type='text' required name='userStreet' id='userStreet'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userStreetNumber'>Numer domu (oraz numer miszkania):</label>
        <input type='text' required name='userStreetNumber' id='userStreetNumber'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userNumber'>Numer telefonu:</label>
        <input type='text' required name='userNumber' id='userNumber'></input>
      </div>
      <div className='formRow'>
        <label htmlFor='userEmail'>Adres email:</label>
        <input type='text' required name='userEmail' id='userEmail'></input>
      </div>
      <div class="formRow">
                    <input type="checkbox" required name="checkboxAgree"></input>
                    <span>wyrażam zgodę na przetwarzanie moich danych osobowych </span>
            </div>
      <input type='submit' className="button" value="Załóż nowe konto" onClick={() => newUserHandle()} ></input>

      </form> 
  
</div>
  );
};
export default NewUser;