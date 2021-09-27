import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ShareSetup = (props) => {
  return <ShareSetupDiv></ShareSetupDiv>;
};

ShareSetup.propTypes = {
  shareSetup: PropTypes.func,
  idToShare: PropTypes.string,
};

const ShareSetupDiv = styled.div``;

export default ShareSetup;
