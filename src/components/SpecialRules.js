import React from "react";
import styled from "styled-components";

import SpecialRulesToggleBtn from "./SpecRulesToggleBtn";
import { mediaQueries } from "../assets/mediaQueries";
import { SRules } from "../assets/RulesPlaceHolders";

const SpecialRules = () => {
  return (
    <SpecRulesDiv>
      <SpecRulesH2>Special Rules:</SpecRulesH2>
      {SRules.map((sRule) => (
        <SpecialRulesToggleBtn
          key={sRule.specialRuleName}
          specRule={sRule.specialRuleName}
        />
      ))}
    </SpecRulesDiv>
  );
};

const SpecRulesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 69px;
  ${mediaQueries("md")`
  margin: 26px;
  `}
`;

const SpecRulesH2 = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  font-size: 2.69rem;
  font-weight: 500;
  text-align: center;
  margin: 9px;
  width: 100%;
`;

export default SpecialRules;
