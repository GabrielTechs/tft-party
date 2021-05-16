import React from "react";
import styled from "styled-components";
import ModeBtn from "./ModeBtn";

import { mediaQueries } from "../assets/mediaQueries";
import { Modes } from "../assets/RulesPlaceHolders";

const ModeHandler = () => {
  return (
    <ModeHandlerDiv>
      <RandomModeDiv>
        <ModeBtn btnValue="Random mode" />
      </RandomModeDiv>
      <ModesDiv>
        {Object.keys(Modes).map((mode) => (
          <ModeBtn key={mode} btnValue={Modes[mode].modeName} />
        ))}
      </ModesDiv>
    </ModeHandlerDiv>
  );
};

const ModeHandlerDiv = styled.div`
  margin: 69px;
  ${mediaQueries("md")`
  margin: 26px;
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
