import Product from "./Product/Product";
let App = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          React Hooks Example
        </a>
      </nav>
      <hr />
      <Product />
    </>
  );
};
export default App;
