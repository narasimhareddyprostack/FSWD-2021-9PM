//how to create redux store
//what is redux store - collection state's
import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
let store = createStore(rootReducer, composeWithDevTools());

export { store };
