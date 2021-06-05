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

const PlayerNameLabel = styled.label`
  align-self: center;
  color: ${({ theme }) => theme.primaryText};
  display: block;
  font-size: 1.8rem;
  text-align: center;
  margin: 6px;
  min-width: 23%;
`;

const PlayerNameInput = styled.input``;

PlayerName.propTypes = {
  player: PropTypes.string,
  playerName: PropTypes.string,
  playerBind: PropTypes.object,
};

export default PlayerName;
