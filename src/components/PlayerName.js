import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PlayerName = (props) => {
  return (
    <PlayerNameLabel>
      {props.player}
      <PlayerNameInput
        name="player"
        type="text"
        placeholder={props.player}
        {...props.playerBind}
      />
    </PlayerNameLabel>
  );
};

const PlayerNameLabel = styled.label``;

const PlayerNameInput = styled.input``;

PlayerName.propTypes = {
  player: PropTypes.string,
  playerName: PropTypes.string,
  playerBind: PropTypes.object,
};

export default PlayerName;
