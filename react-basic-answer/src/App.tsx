import React from "react";
import "./App.scss";
import { No1, No2 } from "./components/answer";

const App = () => {
  return (
    <main className="main">
      <h1 className="App">Reactの基礎振り返り勉強会</h1>
      <div className="pl20">
        <No1 />
        <No2 />
      </div>
    </main>
  );
};

export default App;
