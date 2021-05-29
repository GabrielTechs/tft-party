import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { mediaQueries } from "../assets/mediaQueries";
import { Modes, SRules } from "../assets/RulesPlaceHolders";

const RulesActive = (props) => {
  const modePh = "Yin-Yang";
  const sRulesPh = ["Commander 2 star", "Carousel champ"];

  const modeActive = Modes.filter((m) => m.modeName === modePh);
  let specialRuleActive = [];

  const specialRulesActive = sRulesPh.map((rule) =>
    SRules.filter((r) => r.specialRuleName === rule)
  );
  specialRulesActive.map((rule) => {
    return rule.map((r) => specialRuleActive.push(r.specialRule));
  });

  return (
    <RulesDiv>
      <h1>Rules active:</h1>
      {modeActive.map((mode) => (
        <RulesContainerDiv key={mode.modeName}>
          <h1>Mode:</h1>
          <h2>{mode.modeName}</h2>
          <h2>{mode.modeDescription}</h2>
          <h1>Mode rules:</h1>
          {mode.rules.map((rule) => (
            <h2 key={rule}>{rule}</h2>
          ))}
        </RulesContainerDiv>
      ))}
      {sRulesPh.length > 0 && (
        <RulesContainerDiv>
          <h1>Special rules:</h1>
          {specialRuleActive.map((sRule) => (
            <h2 key={sRule}>- {sRule}.</h2>
          ))}
        </RulesContainerDiv>
      )}
    </RulesDiv>
  );
};

RulesActive.propTypes = {
  modes: PropTypes.string,
  advancedRules: PropTypes.string,
};

const RulesDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 15px;
  margin: 69px;
  padding: 10px;
  h1 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 2rem;
    font-weight: 600;
    margin: 6px;
  }
  h2 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 500;
    margin: 6px;
  }
  ${mediaQueries("md")`
    margin: 26px;
  `}
`;

const RulesContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 9px;
  h2 {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 500;
    margin: 6px;
  }
  ${mediaQueries("sm")`
  margin: 26px;`}
`;

export default RulesActive;
