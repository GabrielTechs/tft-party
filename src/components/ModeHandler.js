import React from "react";
import styled from "styled-components";

import { mediaQueries } from "../assets/mediaQueries";

const ModeHandler = () => {
  return (
    <ModeHandlerDiv>
      <RandomModeDiv></RandomModeDiv>
      <ModesDiv></ModesDiv>
    </ModeHandlerDiv>
  );
};

const ModeHandlerDiv = styled.div`
  padding: 69px;
  ${mediaQueries("md")`
  padding: 26px;
  `}
`;

const RandomModeDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ModesDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default ModeHandler;
