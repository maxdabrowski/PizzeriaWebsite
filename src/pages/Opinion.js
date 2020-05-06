import React from "react";
import "../styles/Opinion.css";

const Opinion = () => {
  return (
    <div className="opinion">
      <p>pamiętaj, oby zagłosowac lub dodać opini musisz być zalogowany</p>
      <div>gwiazdki do głosowani</div>
      <div>
      <form>
  <label>
    Imię:
    <textarea></textarea>
  </label>
  <input type="submit" value="Wyślij" />
</form>
        </div>  
    </div>
  );
};

export default Opinion;
