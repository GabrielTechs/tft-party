import React from "react";
import styled from "styled-components";

const NavDiv = styled.div`
  position: sticky;
  width: 100%;
  height: 72px;
  border-radius: 0px 0px 10px 10px;
  background: cadetblue;
  opacity: 0.8;
  transition: 0.6s;
  z-index: 200;
`;

const NavBar = () => {
  return <NavDiv></NavDiv>;
};

export default NavBar;
