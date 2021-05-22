import React from "react";
import styled from "styled-components";
import ModeBtn from "./ModeBtn";

import { mediaQueries } from "../assets/mediaQueries";
import { Modes } from "../assets/RulesPlaceHolders";

const ModeHandler = () => {
  return (
    <ModeHandlerDiv>
      <ModeHandlerH2>Game modes:</ModeHandlerH2>
      <RandomModeDiv>
        <ModeBtn btnValue="Random mode" />
      </RandomModeDiv>
      <ModesDiv>
        {Modes.map((mode) => (
          <ModeBtn key={mode.modeName} btnValue={mode.modeName} />
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

const ModeHandlerH2 = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  font-size: 2.69rem;
  font-weight: 500;
  text-align: center;
  margin: 9px;
  width: 100%;
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
