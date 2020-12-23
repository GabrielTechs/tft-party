import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 72px;
  border-radius: 0px 0px 10px 10px;
  background: cadetblue;
  opacity: 0.8;
  transition: 0.6s;
  z-index: 200;

  .logo {
    height: 50px;
    width: 235px;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <div className="logo">TFT Party</div>
    </NavContainer>
  );
};

export default NavBar;
