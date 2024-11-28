import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <div className="container">
        <h3>THE TRIPS</h3>
        <div className="allCart">
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
