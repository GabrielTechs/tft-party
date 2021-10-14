import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SharedSetup from "../components/SharedSetup";

const SharedSetupPage = (props) => {
  const setupId = props.match.params.setupId;

  return (
    <Fragment>
      <SharedSetup setupId={setupId} />
    </Fragment>
  );
};

SharedSetupPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      setupId: PropTypes.string,
    }),
  }),
};

export default SharedSetupPage;
