import React from "react";
import styled from "styled-components";
import ModeBtn from "./ModeBtn";

import { mediaQueries } from "../assets/mediaQueries";

const ModeHandler = () => {
  return (
    <ModeHandlerDiv>
      <RandomModeDiv>
        <ModeBtn btnValue="Random mode" />
      </RandomModeDiv>
      <ModesDiv>
        <ModeBtn btnValue="Mode one" />
        <ModeBtn btnValue="Mode two" />
        <ModeBtn btnValue="Mode three" />
        <ModeBtn btnValue="Mode four" />
        <ModeBtn btnValue="Mode five" />
        <ModeBtn btnValue="Mode six" />
        <ModeBtn btnValue="Mode seven" />
      </ModesDiv>
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
