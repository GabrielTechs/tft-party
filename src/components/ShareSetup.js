import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SaveSetupBtn from "./SaveSetupBtn";
import SavedSetupLink from "./SavedSetupLink";

const ShareSetup = (props) => {
  return (
    <ShareSetupDiv>
      <SaveSetupBtn shareSetup={props.shareSetup} />
      <SavedSetupLink idToShare={props.idToShare} />
    </ShareSetupDiv>
  );
};

ShareSetup.propTypes = {
  shareSetup: PropTypes.func,
  idToShare: PropTypes.string,
};

const ShareSetupDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 69px;
`;

export default ShareSetup;
