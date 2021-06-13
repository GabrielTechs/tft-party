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
    return setMode(Modes.filter((mode) => mode.modeName === value));
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
