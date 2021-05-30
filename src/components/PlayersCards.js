import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

import PlayersNames from "./PlayersNames";

const PlayersCards = () => {
  return (
    <PlayersCardsDiv>
      <h1>Players names</h1>
      <PlayersNames players="players" />
      <h1>Players setup</h1>
    </PlayersCardsDiv>
  );
};

const PlayersCardsDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 15px;
  margin: 69px;
  h1 {
    color: ${({ theme }) => theme.primaryText};
    display: inline-block;
    font-size: 2.69rem;
    font-weight: 500;
    margin: 9px;
    text-align: center;
    width: 100%;
  }
  ${mediaQueries("md")`
    margin: 26px;
  `}
`;

export default PlayersCards;
