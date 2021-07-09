import React, { Fragment } from "react";

import ModeHandler from "../components/ModeHandler";
import SpecialRules from "../components/SpecialRules";
import RulesActive from "../components/RulesActive";
import PlayersCards from "../components/PlayersCards";

const HomePage = () => {
  return (
    <Fragment>
      <ModeHandler />
      <SpecialRules />
      <RulesActive />
      <PlayersCards />
    </Fragment>
  );
};

export default HomePage;
