import React, { Fragment } from "react";
import HelmetData from "../assets/HelmetData";

import Presentation from "../components/Presentation";
import ModeHandler from "../components/ModeHandler";
import SpecialRules from "../components/SpecialRules";
import RulesActive from "../components/RulesActive";
import PlayersCards from "../components/PlayersCards";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <HelmetData
        title="Tft party - play tft with friends in a different way"
        description="Multiple modes and easy to share, play tft with friends and have a different experience."
      />
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
