import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import useFirestore from "../hooks/useFirestore";

import RulesModes from "./RulesModes";
import RulesSpecial from "./RulesSpecial";

const SharedSetup = (props) => {
  return <SharedSetupDiv></SharedSetupDiv>;
};

SharedSetup.propTypes = {
  setupId: PropTypes.string,
};

const SharedSetupDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 69px;
  padding: 10px;
`;

export default SharedSetup;
