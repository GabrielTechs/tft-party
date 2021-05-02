import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SHexagon from "./SHexagon";

const SpecRulesToggleBtn = (props) => {
  return (
    <SpecRulesTBtn onClick={props.toggle}>
      <SHexagon background="none" />
      <h3>{props.specRule}</h3>
    </SpecRulesTBtn>
  );
};

const SpecRulesTBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 56px;
  width: 19%;
  padding: 10px;
  h3 {
    color: ${({ theme }) => theme.primaryText};
    line-height: 39px;
    margin-left: 5px;
    font-weight: 500;
  }
`;

SpecRulesToggleBtn.propTypes = {
  toggle: PropTypes.func,
  specRule: PropTypes.string,
};

export default SpecRulesToggleBtn;
