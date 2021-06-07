import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

import ChampionChosen from "./ChampionChosen";

const PlayerCard = (props) => {
  return (
    <PlayerCardDiv>
      <PlayerCardNameDiv>
        <h3>{props.player}</h3>
        {props.playerName && (
          <h3 className="player-card-th">: {props.playerName}</h3>
        )}
      </PlayerCardNameDiv>
      <h2>Chosen ones:</h2>
      <ChampionChosen
        championImg="https://rerollcdn.com/characters/Skin/5/Viego.png"
        championName="Viego"
      />
      <ChampionChosen
        championImg="https://rerollcdn.com/characters/Skin/5/Volibear.png"
        championName="Volibear"
      />
    </PlayerCardDiv>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.string,
  playerName: PropTypes.string,
};

const PlayerCardDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  border: 3px solid ${({ theme }) => theme.primary};
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  border-radius: 15px;
  margin: 9px;
  width: 45%;
  max-width: 450px;
  padding: 9px;
  h2 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 1.69rem;
    font-weight: 600;
    width: 100%;
    margin: 6px 6px 16px 6px;
  }
  h3 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 1.69rem;
    font-weight: 600;
  }
  .player-card-th {
    font-weight: 500;
  }
  ${mediaQueries("md")`
    width: 96%;
  `}
`;

const PlayerCardNameDiv = styled.div`
  width: 100%;
  margin: 6px 6px 16px 6px;
`;

export default PlayerCard;
