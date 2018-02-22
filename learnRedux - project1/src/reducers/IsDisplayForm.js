import * as types from './../constants/ActionTypes'; // import cac gia tri mac dinh

var initialState = false; // close form
var myReducer = (state = initialState,action) =>{
 switch(action.type){
   case types.TOGGLE_FORM:
        return !state;
   case types.OPEN_FORM:
        return true;
   case types.CLOSE_FORM:
        return false;
    default : return state;
 }
};

export default myReducer;
