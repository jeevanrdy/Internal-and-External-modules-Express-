import "./App.css";
import { useState } from "react";

function App() {
  let [hinActors, sethinActors] = useState([]);
  let [telactors, setTelActors] = useState([]);
  let getBollyActors = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:4444/BollyActors", reqOption);
    let JSOData = await JSONData.json();
    sethinActors(JSOData);

    console.log(JSOData);
  };
  let getTollyActors = async () => {
    let reqOption = {
      method: "GET",
    };
    let JSONData = await fetch("http://localhost:4444/TollyActors", reqOption);
    let JSOData = await JSONData.json();
    setTelActors(JSOData);
    console.log(JSOData);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          getBollyActors();
        }}
      >
        Bolly Actors
      </button>
      <button
        onClick={() => {
          getTollyActors();
        }}
      >
        Tolly Actors
      </button>
      {hinActors.map((ele, i) => {
        // <div key={i}>
        return <h2 key={i}>{ele}</h2>;
        // <img src={hinActors.image} alt={hinActors.name} />;
        // </div>;
      })}
      {telactors.map((ele, i) => {
        return <h2 key={i}>{ele}</h2>;
      })}
    </div>
  );
}

export default App;
