import React from "react";
import styled from "styled-components";

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
