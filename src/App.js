import React from "react";
import "./App.css";
import "./assets/FontAwesomeIcon";

import { ThemeProvider } from "styled-components";
import useTheme from "./assets/useTheme";
import GlobalStyles from "./assets/GlobalStyles";

import NavBar from "./components/NavBar";
import { themes } from "./assets/themes";

function App() {
  const { theme, themeToggler, icon } = useTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <div className="App">
        <NavBar theme={theme} themeToggler={themeToggler} icon={icon} />
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
