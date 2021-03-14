import { combineReducers } from "redux";
import { messageReducer } from "./wish/wish.reducer";
import { counterReducer } from "./Counter/counter.reducer";
let rootReducer = combineReducers({
  wishMessage: messageReducer,
  counter: counterReducer,
});
export default rootReducer;


//rootReducer - objective is  - to combine all reducers