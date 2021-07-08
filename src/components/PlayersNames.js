import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import PlayerName from "./PlayerName";

const PlayersNames = (props) => {
  return (
    <PlayersNamesDiv>
      {props.players.map((player) => (
        <PlayerName
          key={player.player}
          player={player.player}
          playerName={player.name}
          playerBind={player.bind}
        />
      ))}
    </PlayersNamesDiv>
  );
};

PlayersNames.propTypes = {
  players: PropTypes.array,
};

const PlayersNamesDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 9px;
`;

export default PlayersNames;
