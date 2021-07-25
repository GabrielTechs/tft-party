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

const RulesModesDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 15px;
  margin: 26px 0;
  padding: 10px;
  h2 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    margin: 6px;
  }
  h3 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 500;
    margin: 6px;
  }
`;

export default RulesModes;
