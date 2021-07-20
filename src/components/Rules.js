import React, { Fragment } from "react";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

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

const RulesDiv = styled.div`
  margin: 69px;
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primaryText};
    display: inline-block;
    font-size: 2.69rem;
    font-weight: 500;
    margin: 9px;
    width: 100%;
  }
  ${mediaQueries("md")`
  margin: 26px;
`}
`;

export default Rules;
