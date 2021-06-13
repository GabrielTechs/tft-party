import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { Modes } from "../assets/RulesPlaceHolders";

const ActiveRulesContext = React.createContext();

const useActiveRules = () => {
  return useContext(ActiveRulesContext);
};

const initialMode = Modes.filter((mode) => mode.modeNum === 0);

const ActiveRulesProvider = ({ children }) => {
  const [mode, setMode] = useState(initialMode);

  const changeMode = (value) => {
    if (value === "Random mode") {
      let randomMode = Math.floor(Math.random() * Modes.length);
      mode.map((activeMode) => {
        while (randomMode === activeMode.modeNum) {
          randomMode = Math.floor(Math.random() * Modes.length);
        }
        return randomMode;
      });
      return setMode(Modes.filter((mode) => mode.modeNum === randomMode));
    } else {
      return setMode(Modes.filter((mode) => mode.modeName === value));
    }
  };

  const activeRules = {
    mode,
    changeMode,
  };

  return (
    <ActiveRulesContext.Provider value={activeRules}>
      {children}
    </ActiveRulesContext.Provider>
  );
};

ActiveRulesProvider.propTypes = {
  children: PropTypes.object,
};

export { ActiveRulesProvider, useActiveRules };
