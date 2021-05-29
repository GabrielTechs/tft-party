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

const PlayersNamesDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 9px;
`;

export default PlayersNames;
