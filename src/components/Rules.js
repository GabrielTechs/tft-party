import React from "react";
import styled from "styled-components";

import useRules from "../hooks/useRules";

const Rules = () => {
  const { modes, specialRules, loadingRules } = useRules();

  return <RulesDiv></RulesDiv>;
};

const RulesDiv = styled.div``;

export default Rules;
