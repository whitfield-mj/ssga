import React, { useState } from "react";
import "./App.css";
import Scorecards from "./scorecards/Scorecards";
import Preferences from "./preferences/Preferences";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";

function App() {
  const [highlighted, setHighlighted] = useState([]);

  const toggleHighlighted = scoreType => {
    if (highlighted.includes(scoreType))
      return setHighlighted(highlighted.filter(type => type !== scoreType));

    setHighlighted([...highlighted, scoreType]);
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <header id="app-header">
          <h1>SSGA</h1>
        </header>
        <Preferences onSelect={toggleHighlighted} selected={highlighted} />
        <div id="main-content">
          <Scorecards highlighted={highlighted} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
