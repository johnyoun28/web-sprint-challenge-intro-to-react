import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";

const App = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
      .then((res) => {
        console.log(res.data.results);
        setChars(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Characters</h1>
      <Character chars={chars} />
    </div>
  );
};

export default App;
