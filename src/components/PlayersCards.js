import React, { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

import usePlayers from "../hooks/usePlayers";
import useSetInfo from "../hooks/useSetInfo";
import useShareSetup from "../hooks/useShareSetup";

import PlayersNames from "./PlayersNames";
import RerollPlayersSetup from "./RerollPlayersSetup";
import PLayerCard from "./PlayerCard";

const PlayersCards = () => {
  const [rerollSetup, setRerollSetup] = useState(false);
  const { playersInputs } = usePlayers();
  const { champions, traits, loadingSetInfo } = useSetInfo();
  const { saveSetup } = useShareSetup();

  const handleRerollSetup = () => {
    setRerollSetup((prevRerollSetup) => !prevRerollSetup);
  };

  return (
    <PlayersCardsDiv>
      <h1>Players names</h1>
      <PlayersNames players={playersInputs} />
      <RerollPlayersSetup handleRerollSetup={handleRerollSetup} />
      <h1>Players setup</h1>
      {!loadingSetInfo ? (
        playersInputs.map((player) => (
          <PLayerCard
            key={`${rerollSetup} ${player.player}`}
            player={player.player}
            playerName={player.name}
            champions={champions}
            traits={traits}
            saveSetup={saveSetup}
            sharedSetup={{}}
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </PlayersCardsDiv>
  );
};

const PlayersCardsDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-around;
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
