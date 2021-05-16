import React from "react";
import styled from "styled-components";

import SpecialRulesToggleBtn from "./SpecRulesToggleBtn";
import { SRules } from "../assets/RulesPlaceHolders";

const SpecialRules = () => {
  return (
    <SpecRulesDiv>
      <SpecRulesH2>Special Rules:</SpecRulesH2>
      {Object.keys(SRules).map((sRule) => (
        <SpecialRulesToggleBtn
          key={sRule}
          specRule={SRules[sRule].specialRuleName}
        />
      ))}
    </SpecRulesDiv>
  );
};

const SpecRulesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 69px;
`;

const SpecRulesH2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.primaryText};
`;

export default SpecialRules;
