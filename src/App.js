import React from "react";
import "./assets/FontAwesomeIcon";
import GlobalStyles from "./assets/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//imports needed to control the theme
import { themes } from "./assets/themes";
import { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";

//contexts
import { ActiveRulesProvider } from "./contexts/ActiveRulesContext";

//general components
import NavBar from "./components/NavBar";

//pages
import HomePage from "./pages/HomePage";
import RulesPage from "./pages/RulesPage";

function App() {
  const { theme, themeToggler, icon } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <ActiveRulesProvider>
          <div className="App">
            <NavBar theme={theme} themeToggler={themeToggler} icon={icon} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/rules" component={RulesPage} />
            </Switch>
          </div>
        </ActiveRulesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
