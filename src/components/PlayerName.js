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

const PlayerNameInput = styled.input`
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  color: ${({ theme }) => theme.secondaryText};
  display: block;
  font-size: 1.5rem;
  margin-top: 6px;
  padding: 9px;
  text-align: center;
  width: 100%;
`;

PlayerName.propTypes = {
  player: PropTypes.string,
  playerName: PropTypes.string,
  playerBind: PropTypes.object,
};

export default PlayerName;
