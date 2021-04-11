import React from "react";
import styled from "styled-components";

const ThemeToggleBtn = (props) => {
  return <ThemeBtn onClick={props.themeToggler}>theme toggler</ThemeBtn>;
};

const ThemeBtn = styled.button``;

export default ThemeToggleBtn;
