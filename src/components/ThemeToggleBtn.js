import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggleBtn = (props) => {
  return (
    <ThemeBtn onClick={props.themeToggler}>
      <FontAwesomeIcon icon={props.icon} size="1x" />
    </ThemeBtn>
  );
};

ThemeToggleBtn.propTypes = {
  themeToggler: PropTypes.func,
  icon: PropTypes.array,
};

const ThemeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 2rem;
  margin-left: 15px;
  transition: 0.8s;
`;

export default ThemeToggleBtn;
