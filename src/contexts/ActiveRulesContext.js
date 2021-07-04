import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import useRules from "../hooks/useRules";

const ActiveRulesContext = React.createContext();

const useActiveRules = () => {
  return useContext(ActiveRulesContext);
};

const ActiveRulesProvider = ({ children }) => {
  const { modes, loadingRules } = useRules();
  const [modeActive, setModeActive] = useState({});
  const [specialRulesActive, setSpecialRulesActive] = useState([]);

  const changeMode = (value) => {
    let tempMode = {};
    if (value === "Random mode") {
      let randomMode = Math.floor(Math.random() * modes.length);
      if (randomMode === modeActive.modeNum) {
        randomMode = Math.floor(Math.random() * modes.length);
      }
      modes.filter((mode) => {
        if (mode.modeNum === randomMode) {
          return (tempMode = mode);
        }
        return false;
      });
      return setModeActive(tempMode);
    } else {
      modes.filter((mode) => {
        if (mode.modeName === value) {
          return (tempMode = mode);
        }
        return false;
      });
      return setModeActive(tempMode);
    }
  };

  const toggleSpecialRule = (specialRule, isActive) => {
    if (isActive) {
      const filter = specialRulesActive.filter(
        (sRule) => sRule !== specialRule
      );
      return setSpecialRulesActive([...filter]);
    } else {
      return setSpecialRulesActive([...specialRulesActive, specialRule]);
    }
  };

  useEffect(() => {
    if (!loadingRules) {
      modes.filter((mode) => {
        if (mode.modeNum === 0) {
          setModeActive(mode);
        }
        return false;
      });
    }
  }, [loadingRules, modes]);

  const activeRules = {
    modeActive,
    specialRulesActive,
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
