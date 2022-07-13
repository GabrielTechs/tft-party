import React from "react";
import "./assets/FontAwesomeIcon";
import GlobalStyles from "./assets/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import SharedSetupPage from "./pages/SharedSetupPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const { theme, themeToggler, icon } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <ActiveRulesProvider>
          <div className="App">
            <NavBar theme={theme} themeToggler={themeToggler} icon={icon} />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/rules" element={<RulesPage />} />
              <Route
                exact
                path="/shared/:setupId"
                element={<SharedSetupPage />}
              />
              <Route exact path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </ActiveRulesProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
