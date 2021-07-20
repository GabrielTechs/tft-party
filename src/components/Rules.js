import React, { Fragment } from "react";
import styled from "styled-components";

import useRules from "../hooks/useRules";

import RulesModes from "./RulesModes";
import RulesSpecial from "./RulesSpecial";

const Rules = () => {
  const { modes, specialRules, loadingRules } = useRules();

  return (
    <RulesDiv>
      {!loadingRules ? (
        <Fragment>
          <h1>Modes</h1>
          {modes.map((mode) => (
            <RulesModes key={mode.modeName} mode={mode} />
          ))}
          <h1>Special Rules</h1>
          <RulesSpecial specialRules={specialRules} />
        </Fragment>
      ) : (
        <h1>Loading...</h1>
      )}
    </RulesDiv>
  );
};

const RulesDiv = styled.div``;

export default Rules;
