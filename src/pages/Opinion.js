import React from "react";
import ReactStars from 'react-stars'
import "../styles/Opinion.css";
import {useDispatch,useSelector} from "react-redux";
import { SET_OPINION_MESSAGE, SET_OPINION_ERROR, SET_OPINIONS, SET_INITIAL_OPINION, SET_VOTES } from "../store/opinion";

const Opinion = () => {

  const dispatch = useDispatch();
  let user = useSelector(state => state.user);
  let opinion = useSelector(state => state.opinion);

  // lista opinii ze stora
  const opinionList = opinion.opinions.map(oneOpinion => (
    <li key={oneOpinion._id}>
      <p className="opinionData">{oneOpinion.data}</p>
      <p className="opinionText">{"'" + oneOpinion.opinion + "'"}</p>
      <p className="opinionUser">{oneOpinion.userName}</p>
    </li>
  ));

  //objekt opinii do wysłania do API
  let opinionToSend = {
    opinion: opinion.opinionMessage,
    userName: user.loginUser.name,
    userId: user.loginUser._id,
  };

  //wysłanie oddania głosu 
  const ratingChanged = async (newRating) => {  
    const vote = {vote: newRating};
    const response = await fetch('https://cessarepizza.herokuapp.com/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vote)
    });
    const body = await response.json();
    dispatch({type:SET_VOTES, payload: body})
  };

  //ustawianie wartości z textarea do stora 
  const handleMessage = (e) => {
    dispatch({type: SET_OPINION_MESSAGE, payload:e.target.value})
  };

  //obsługa wysłania opinii
  const sendOpinion = async e => {
    if(user.logIn && opinion.opinionMessage !== ''){
    const response = await fetch('https://cessarepizza.herokuapp.com/api/send_opinion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(opinionToSend),
    });
    const body = await response.json();
    dispatch({type:SET_OPINIONS, payload: body})
    dispatch({type:SET_INITIAL_OPINION})
    document.querySelector('.orderTextarea').value = ''
    }else{
      dispatch({type:SET_OPINION_ERROR, payload: 'Musisz być zalogowany aby móc komentować, a także komentarz nie może być pusty'})
    }
  };

  return (
    <div className="opinion"> 
      <p>Zostaw ocenę, komentarz, każda ocena jest mile widziana.</p>
      <ReactStars count={5} className="stars" half={false} onChange={ratingChanged} size={40}  color2={'#ffd700'} />  
      <p>Średnia ocena : {opinion.averageVotes.toString().substring(0,4)}</p>
      <p>Liczba oddanych głósów : {opinion.numberVotes}</p>
      <div>
        <textarea className="orderTextarea" onChange={(e) => handleMessage(e)}></textarea>
        <button className="button opinionBtn" onClick={() => sendOpinion()}>Wyślij</button>
      <p className="loginError">{opinion.opinionError}</p>
      </div>
      <div className="opinionList">
        <ul>{opinionList}</ul>
      </div>
    </div>
  );
};

export default Opinion;
