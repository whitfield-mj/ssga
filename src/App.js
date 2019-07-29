import React from "react";
import "./App.css";
import Scorecards from "./scorecards/Scorecards";

function App() {
  return (
    <div id="app">
      <header id="app-header">
        <h1>SSGA</h1>
      </header>
      <div id="main-content">
        <Scorecards />
      </div>
    </div>
  );
}

export default App;
