import React from "react";
import WishMessage from "./Components/wish/WishMessage";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./Components/ProductCounter/Counter";
let App = () => {
  return (
    <React.Fragment>
      <nav className="nav navbar-dark bg-dark">
        <a href="/"> React Redux Example</a>
      </nav>
      <Provider store={store}>
        <WishMessage />
        <Counter />
      </Provider>
    </React.Fragment>
  );
};
export default App;
