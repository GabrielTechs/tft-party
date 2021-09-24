import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

import ChampionCommander from "./ChampionCommander";
import ChampionOrigin from "./ChampionOrigin";

import useRerollPlayers from "../hooks/useRerollPlayers";
import usePlayerCard from "../hooks/usePlayerCard";

const PlayerCard = (props) => {
  const { commanders, origins, teamSide } = useRerollPlayers();

  return (
    <PlayerCardDiv>
      <PlayerCardNameDiv>
        <h3>{props.player}</h3>
        {props.playerName && (
          <h3 className="player-card-th">: {props.playerName}</h3>
        )}
      </PlayerCardNameDiv>
      {teamSide !== "none" && <h4>Team {teamSide}</h4>}
      {commanders.length > 0 && (
        <React.Fragment>
          <h2>Commanders:</h2>
          {commanders.map((champion, index) =>
            props.champions.map((champ) => {
              if (champ.championId === champion) {
                return (
                  <ChampionCommander
                    key={index}
                    championImg={champ.imgUrl}
                    championName={champ.name}
                    championCost={champ.cost}
                  />
                );
              } else {
                return false;
              }
            })
          )}
        </React.Fragment>
      )}
      {origins.length > 0 && (
        <React.Fragment>
          <h2>Origins:</h2>
          {origins.map((originId, index) =>
            props.traits.map((trait) => {
              if (trait.key === originId) {
                return (
                  <ChampionOrigin
                    key={index}
                    origin={trait}
                    champions={props.champions}
                  />
                );
              } else {
                return false;
              }
            })
          )}
        </React.Fragment>
      )}
    </PlayerCardDiv>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.string,
  playerName: PropTypes.string,
  champions: PropTypes.array,
  traits: PropTypes.array,
};

const PlayerCardDiv = styled.div`
  min-height: 200px;
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
  h4 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 1.69rem;
    font-weight: 500;
    width: 100%;
    text-align: center;
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
