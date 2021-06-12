import React, { useContext } from "react";
import PropTypes from "prop-types";

const ActiveRulesContext = React.createContext();

const useActiveRules = () => {
  return useContext(ActiveRulesContext);
};

const ActiveRulesProvider = ({ children }) => {
  const activeRules = {};

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
