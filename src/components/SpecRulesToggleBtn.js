import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SpecRulesToggleBtn = (props) => {
  return <SpecRulesTBtn onClick={props.toggle}></SpecRulesTBtn>;
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
`;

SpecRulesToggleBtn.propTypes = {
  toggle: PropTypes.func,
  specRule: PropTypes.string,
};

export default SpecRulesToggleBtn;
