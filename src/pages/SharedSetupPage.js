import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SharedSetup from "../components/SharedSetup";

const SharedSetupPage = (props) => {
  return (
    <Fragment>
      <SharedSetup />
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
