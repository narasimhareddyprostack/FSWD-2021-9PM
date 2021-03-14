//what is reducer
/*
    reducer is pure function
    -reducer is taking two arguments
    1. state
    2. action
*/
// import Action Types

import { INCR, DECR } from "./counter.actions";
let initialState = {
  counter: {
    qty: 1,
  },
};

let counterReducer = (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case INCR:
      return {
        counter: {
          qty: state.counter.qty + 1,
        },
      };
    case DECR:
      return {
        counter: {
          qty: state.counter.qty - 1,
        },
      };

    default:
      return state;
  }
};
export { counterReducer };
