import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModeBtn = (props) => {
  return <SModeBtn>{props.btnValue}</SModeBtn>;
};

const SModeBtn = styled.button``;

ModeBtn.propTypes = {
  btnValue: PropTypes.string,
};

export default ModeBtn;
