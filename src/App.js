import React from "react";

import "./assets/FontAwesomeIcon";
import GlobalStyles from "./assets/GlobalStyles";
import { themes } from "./assets/themes";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";

import { ActiveRulesProvider } from "./contexts/ActiveRulesContext";

import NavBar from "./components/NavBar";
import ModeHandler from "./components/ModeHandler";
import SpecialRules from "./components/SpecialRules";
import RulesActive from "./components/RulesActive";
import PlayersCards from "./components/PlayersCards";

function App() {
  const { theme, themeToggler, icon } = useTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <ActiveRulesProvider>
        <div className="App">
          <NavBar theme={theme} themeToggler={themeToggler} icon={icon} />
          <ModeHandler />
          <SpecialRules />
          <RulesActive />
          <PlayersCards />
        </div>
      </ActiveRulesProvider>
    </ThemeProvider>
  );
}

export default App;
