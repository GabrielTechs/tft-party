import React from "react";
import styled from "styled-components";

import SpecialRulesToggleBtn from "./SpecRulesToggleBtn";

const SpecialRules = () => {
  return (
    <SpecRulesDiv>
      <SpecRulesH2>Special Rules:</SpecRulesH2>
      <SpecialRulesToggleBtn specRule="rule 1" />
      <SpecialRulesToggleBtn specRule="rule 2" />
      <SpecialRulesToggleBtn specRule="rule 3" />
      <SpecialRulesToggleBtn specRule="rule 4" />
    </SpecRulesDiv>
  );
};

const SpecRulesDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const SpecRulesH2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.primaryText};
`;

export default SpecialRules;
