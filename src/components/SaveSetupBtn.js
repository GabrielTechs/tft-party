import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SaveSetupBtn = (props) => {
  return <SBtnSaveSetup></SBtnSaveSetup>;
};

SaveSetupBtn.propTypes = {
  shareSetup: PropTypes.func,
};

const SBtnSaveSetup = styled.button``;

export default SaveSetupBtn;
