import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Kuchařka</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
        <span>Aliquam</span>, aliquid?
      </p>
      <div>
        <img
          src={require("./mike-gattorna-IxBCafdQItg-unsplash.jpg")}
          alt="cookbook"
        />
      </div>
    </div>
  );
}

export default App;
