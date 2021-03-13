import { combineReducers } from "redux";
import { messageReducer } from "./wish/wish.reducer";

let rootReducer = combineReducers({ wishMessage: messageReducer });
export default rootReducer ;
