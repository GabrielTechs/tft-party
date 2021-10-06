import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SharedSetup = (props) => {
  return <SharedSetupDiv></SharedSetupDiv>;
};

SharedSetup.propTypes = {
  setupId: PropTypes.string,
};

const SharedSetupDiv = styled.div``;

export default SharedSetup;
