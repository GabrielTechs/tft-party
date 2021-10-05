import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

import ChampionCommander from "./ChampionCommander";
import ChampionOrigin from "./ChampionOrigin";

import usePlayerCard from "../hooks/usePlayerCard";

const PlayerCard = (props) => {
  const { playerSetup } = usePlayerCard(props);

  return (
    <PlayerCardDiv>
      <PlayerCardNameDiv>
        <h3>{playerSetup.player}</h3>
        {playerSetup.playerName && (
          <h3 className="player-card-th">: {playerSetup.playerName}</h3>
        )}
      </PlayerCardNameDiv>

      {playerSetup.teamSide !== "none" && <h4>Team {playerSetup.teamSide}</h4>}

      {playerSetup.commanders.length > 0 && (
        <Fragment>
          <h2>Commanders:</h2>
          {playerSetup.commanders.map((champion, index) =>
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
        </Fragment>
      )}

      {playerSetup.origins.length > 0 && (
        <Fragment>
          <h2>Origins:</h2>
          {playerSetup.origins.map((originId, index) =>
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
        </Fragment>
      )}
    </PlayerCardDiv>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.string,
  playerName: PropTypes.string,
  champions: PropTypes.array,
  traits: PropTypes.array,
  saveSetup: PropTypes.func,
  sharedSetup: PropTypes.object,
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
