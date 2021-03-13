import { GOOD_MORNING, GOOD_NIGHT } from "./wish.action";
let initialState = {
  message: "Hello, ...",
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOD_MORNING:
      return {
        message: "Good Morning ....",
      };
    case GOOD_NIGHT:
      return {
        message: "Good Night ... Sweet Dreams",
      };
    default:
      return state;
  }
};

export { messageReducer };
