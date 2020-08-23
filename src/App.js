import React, { useState } from "react";
import Scorecards from "./scorecards/Scorecards";
import Players from "./players/Players";
import Preferences from "./preferences/Preferences";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import * as S from "./styles";
import Segment from "./layout/Segment";

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
        <S.Header id="app-header">
          <h1>SSGA</h1>
        </S.Header>
        <S.Content>
          <Segment>
            <Players />
          </Segment>
          <Segment title={"Rounds"}>
            <Preferences onSelect={toggleHighlighted} selected={highlighted} />
            <Scorecards highlighted={highlighted} />
          </Segment>
        </S.Content>
      </div>
    </ThemeProvider>
  );
}

export default App;
