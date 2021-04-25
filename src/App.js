import React from "react";

import "./assets/FontAwesomeIcon";
import GlobalStyles from "./assets/GlobalStyles";
import { themes } from "./assets/themes";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";

import NavBar from "./components/NavBar";
import ModeHandler from "./components/ModeHandler";

function App() {
  const { theme, themeToggler, icon } = useTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <div className="App">
        <NavBar theme={theme} themeToggler={themeToggler} icon={icon} />
        <ModeHandler />
      </div>
    </ThemeProvider>
  );
}

export default App;
