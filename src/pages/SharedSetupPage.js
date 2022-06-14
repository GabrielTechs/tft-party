import React, { Fragment } from "react";
import HelmetData from "../assets/HelmetData";

import SharedSetup from "../components/SharedSetup";
import { useParams } from "react-router-dom";

const SharedSetupPage = () => {
  const params = useParams();
  const setupId = params.setupId;

  return (
    <Fragment>
      <HelmetData
        title="Tftparty - shared setup"
        description="Multiple game modes and easy to share to play tft with friends and have a different expirience"
      />
      <SharedSetup setupId={setupId} />
    </Fragment>
  );
};

export default SharedSetupPage;
