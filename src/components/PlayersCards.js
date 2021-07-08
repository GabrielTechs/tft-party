import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

import usePlayers from "../hooks/usePlayers";
import PlayersNames from "./PlayersNames";
import RerollPlayersSetup from "./RerollPlayersSetup";
import PLayerCard from "./PlayerCard";

const PlayersCards = () => {
  const { playersInputs } = usePlayers();

  return (
    <PlayersCardsDiv>
      <h1>Players names</h1>
      <PlayersNames players={playersInputs} />
      <RerollPlayersSetup />
      <h1>Players setup</h1>
      {playersInputs.map((player) => (
        <PLayerCard
          key={player.player}
          player={player.player}
          playerName={player.name}
        />
      ))}
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
