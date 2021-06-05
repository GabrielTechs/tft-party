import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PlayerCard = (props) => {
  return (
    <PlayerCardDiv>
      <PlayerCardNameDiv></PlayerCardNameDiv>
    </PlayerCardDiv>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.string,
  playerName: PropTypes.string,
};

const PlayerCardDiv = styled.div``;

const PlayerCardNameDiv = styled.div``;

export default PlayerCard;
