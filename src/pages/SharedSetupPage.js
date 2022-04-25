import React, { Fragment } from "react";

import SharedSetup from "../components/SharedSetup";
import { useParams } from "react-router-dom";

const SharedSetupPage = () => {
  const params = useParams();
  const setupId = params.setupId;

  return (
    <Fragment>
      <SharedSetup setupId={setupId} />
    </Fragment>
  );
};

export default SharedSetupPage;
