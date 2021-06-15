import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { Modes } from "../assets/RulesPlaceHolders";

const ActiveRulesContext = React.createContext();

const useActiveRules = () => {
  return useContext(ActiveRulesContext);
};

let tempInitialMode = {};
Modes.filter((mode) => {
  if (mode.modeNum === 0) {
    tempInitialMode = mode;
  }
  return false;
});

const initialMode = tempInitialMode;

const ActiveRulesProvider = ({ children }) => {
  const [mode, setMode] = useState(initialMode);
  const [specialRules, setSpecialRules] = useState([]);

  const changeMode = (value) => {
    let tempMode = {};
    if (value === "Random mode") {
      let randomMode = Math.floor(Math.random() * Modes.length);
      if (randomMode === mode.modeNum) {
        randomMode = Math.floor(Math.random() * Modes.length);
      }
      Modes.filter((mode) => {
        if (mode.modeNum === randomMode) {
          return (tempMode = mode);
        }
        return false;
      });
      return setMode(tempMode);
    } else {
      Modes.filter((mode) => {
        if (mode.modeName === value) {
          return (tempMode = mode);
        }
        return false;
      });
      return setMode(tempMode);
    }
  };

  const toggleSpecialRule = (specialRule, isActive) => {
    if (isActive) {
      const filter = specialRules.filter((sRule) => sRule !== specialRule);
      return setSpecialRules([...filter]);
    } else {
      return setSpecialRules([...specialRules, specialRule]);
    }
  };

  const activeRules = {
    mode,
    specialRules,
    changeMode,
    toggleSpecialRule,
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
