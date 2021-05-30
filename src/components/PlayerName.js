import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PlayerName = (props) => {
  return (
    <PlayerNameLabel>
      <PlayerNameInput />
    </PlayerNameLabel>
  );
};

const PlayerNameLabel = styled.label``;

const PlayerNameInput = styled.input``;

PlayerName.propTypes = {};

export default PlayerName;
