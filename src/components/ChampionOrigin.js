import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SHexagon from "./SHexagon";

const ChampionOrigin = (props) => {
  return (
    <ChampionOriginDiv>
      <ChampionOriginHexaDiv>
        <SHexagon
          background={true}
          icon={props.origin.imgUrl}
          traitBg={props.origin.name}
          stroke={"black"}
        />
        <h5>{props.origin.name}</h5>
      </ChampionOriginHexaDiv>
      <ChampionOriginChampDiv>
        <SHexagon img="https://rerollcdn.com/characters/Skin/5/Viego.png" />
        <h4>Champ name</h4>
      </ChampionOriginChampDiv>
      <ChampionOriginChampDiv>
        <SHexagon img="https://rerollcdn.com/characters/Skin/5/Viego.png" />
        <h4>Champ name</h4>
      </ChampionOriginChampDiv>
      <ChampionOriginChampDiv>
        <SHexagon img="https://rerollcdn.com/characters/Skin/5/Viego.png" />
        <h4>Champ name</h4>
      </ChampionOriginChampDiv>
    </ChampionOriginDiv>
  );
};

ChampionOrigin.propTypes = {
  origin: PropTypes.object,
  champions: PropTypes.array,
};

const ChampionOriginDiv = styled.div`
  display: flex;
  width: 100%;
`;

const ChampionOriginHexaDiv = styled.div`
  margin: 6px 9px;
  text-align: center;
  h4 {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.16rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }
  svg {
    min-width: 49px;
    max-width: 49px;
  }
`;

const ChampionsOriginChampsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ChampionOriginChampDiv = styled.div`
  text-align: center;
  margin: auto 9px auto 0;
  padding: 2px;
  h5 {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }
  svg {
    width: 46px;
  }
`;

export default ChampionOrigin;
