import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SaveSetupBtn from "./SaveSetupBtn";
import SavedSetupLink from "./SavedSetupLink";

const ShareSetup = (props) => {
  return (
    <ShareSetupDiv>
      <SaveSetupBtn shareSetup={props.shareSetup} />
    </ShareSetupDiv>
  );
};

ShareSetup.propTypes = {
  shareSetup: PropTypes.func,
  idToShare: PropTypes.string,
};

const ShareSetupDiv = styled.div``;

export default ShareSetup;
