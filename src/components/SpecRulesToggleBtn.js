import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SHexagon from "./SHexagon";
import { mediaQueries } from "../assets/mediaQueries";

const SpecRulesToggleBtn = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SpecRulesTBtn>
      <SHexagon background={isActive} />
      <h2>{props.specRule}</h2>
    </SpecRulesTBtn>
  );
};

SpecRulesToggleBtn.propTypes = {
  specRule: PropTypes.string,
};

const SpecRulesTBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  max-height: 56px;
  width: 24%;
  padding: 6px;
  h2 {
    color: ${({ theme }) => theme.primaryText};
    line-height: 39px;
    margin-left: 5px;
    font-weight: 500;
  }
  svg {
    max-height: 56px;
  }
  ${mediaQueries("lg")`
    width: 39%;
  `}
  ${mediaQueries("md")`
    width: 96%;
  `}
`;

export default SpecRulesToggleBtn;
