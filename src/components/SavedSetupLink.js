import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SavedSetupLink = (props) => {
  return <SavedSetupLinkText>{props.idToShare}</SavedSetupLinkText>;
};

SavedSetupLink.propTypes = {
  idToShare: PropTypes.string,
};

const SavedSetupLinkText = styled.p``;

export default SavedSetupLink;
