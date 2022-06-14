import React, { Fragment } from "react";
import HelmetData from "../assets/HelmetData";

import Rules from "../components/Rules";
import Footer from "../components/Footer";

const RulesPage = () => {
  return (
    <Fragment>
      <HelmetData
        title="Tftparty - all modes rules"
        description="Multiple game modes and easy to share to play tft with friends and have a different expirience"
      />
      <Rules />
      <Footer />
    </Fragment>
  );
};

export default RulesPage;
