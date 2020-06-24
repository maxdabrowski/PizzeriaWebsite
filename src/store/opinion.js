export const SET_OPINIONS = "SET_OPINIONS";
export const SET_OPINION_ERROR = "SET_OPINION_ERROR";
export const SET_OPINION_MESSAGE = "SET_OPINION_MESSAGE";
export const SET_INITIAL_OPINION = "SET_INITIAL_OPINION";
export const SET_VOTES = "SET_VOTES";

const initialState = {
  opinions: [], 
  opinionError: '',
  opinionMessage:'',
  numberVotes : 0,
  averageVotes :0,

};

export default (state = initialState, action) => {
  switch(action.type){

    case SET_OPINIONS: {
      const newOpinions = action.payload;
      return{
        ...state,
        opinions: newOpinions.reverse(),
      };
    }

    case SET_OPINION_ERROR: {
      const opinionError = action.payload;
      return{
        ...state,
        opinionError: opinionError,
      };
    }

    case SET_OPINION_MESSAGE: {
      const newOpinionMwssage = action.payload;
      return{
        ...state,
        opinionMessage: newOpinionMwssage
      };
    }

    case SET_INITIAL_OPINION: {
      return{
        ...state,
        opinionError: '',
        opinionMessage:''
      };
    }
 
    case SET_VOTES: {
      const newNumberVotes = action.payload.numberVotes;
      const averageVotes = action.payload.averageVotes;
      return{
        ...state,
        numberVotes : newNumberVotes,
        averageVotes :averageVotes,

      };
    };
 
    default:{
      console.warn(`Unknow action ${action.type}`);
      return{...state};
    }
  }
};
