import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]); //es5
      return [ action.payload.data, ...state]; //es6
  }
  console.log('Action received', action);

  return state;
}
