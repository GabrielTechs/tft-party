import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RulesModes = (props) => {
  return (
    <RulesModesDiv>
      <h2>{props.mode.modeName}</h2>
      <h3>{props.mode.modeDescription}</h3>
      <h2>Mode rules:</h2>
      {props.mode.rules.map((rule) => (
        <h3 key={rule}>{rule}</h3>
      ))}
    </RulesModesDiv>
  );
};

RulesModes.propTypes = {
  mode: PropTypes.object,
};

const RulesModesDiv = styled.div``;

export default RulesModes;
