import React, { Fragment } from "react";

import Presentation from "../components/Presentation";
import ModeHandler from "../components/ModeHandler";
import SpecialRules from "../components/SpecialRules";
import RulesActive from "../components/RulesActive";
import PlayersCards from "../components/PlayersCards";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Presentation />
      <ModeHandler />
      <SpecialRules />
      <RulesActive />
      <PlayersCards />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
