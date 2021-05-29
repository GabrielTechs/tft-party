import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PlayersNames = (props) => {
  return (
    <PlayersNamesDiv>
      <h1>Players {props.players}</h1>
    </PlayersNamesDiv>
  );
};

PlayersNames.propTypes = {
  players: PropTypes.array,
};

const PlayersNamesDiv = styled.div``;

export default PlayersNames;
