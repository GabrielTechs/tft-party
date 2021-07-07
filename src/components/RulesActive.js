import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { mediaQueries } from "../assets/mediaQueries";
import { useActiveRules } from "../contexts/ActiveRulesContext";
import useRules from "../hooks/useRules";

const RulesActive = (props) => {
  const { modeActive, specialRulesActive } = useActiveRules();
  const { specialRules } = useRules();

  let sRuleNamesActive = [];

  const sRulesActive = specialRulesActive.map((sRule) =>
    specialRules.filter((sRuleFilter) => sRuleFilter.specialRuleName === sRule)
  );
  sRulesActive.map((sRuleActive) => {
    return sRuleActive.map((sRuleActiveDescription) =>
      sRuleNamesActive.push(sRuleActiveDescription.specialRule)
    );
  });

  return (
    <RulesActiveDiv>
      <h1>Rules active:</h1>
      {modeActive ? (
        <RulesContainerDiv>
          <h1>Mode:</h1>
          <h2>{modeActive.modeName}</h2>
          <h2>{modeActive.modeDescription}</h2>
          <h1>Mode rules:</h1>
          {modeActive.rules.map((rule) => (
            <h2 key={rule}>{rule}</h2>
          ))}
        </RulesContainerDiv>
      ) : (
        <h1>Loading...</h1>
      )}

      {specialRulesActive.length > 0 && (
        <RulesContainerDiv>
          <h1>Special rules:</h1>
          {sRuleNamesActive.map((sRule) => (
            <h2 key={sRule}>- {sRule}</h2>
          ))}
        </RulesContainerDiv>
      )}
    </RulesActiveDiv>
  );
};

RulesActive.propTypes = {
  modes: PropTypes.string,
  advancedRules: PropTypes.string,
};

const RulesActiveDiv = styled.div`
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
