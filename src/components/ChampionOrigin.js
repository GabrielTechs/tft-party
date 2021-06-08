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
          icon="https://rerollcdn.com/icons/dawnbringer.png"
        />
        <h4>Dawnbringer</h4>
      </ChampionOriginHexaDiv>
      <ChampionOriginChampsDiv>
        <SHexagon img="https://rerollcdn.com/characters/Skin/5/Viego.png" />
        <h4>Champ name</h4>
      </ChampionOriginChampsDiv>
      <ChampionOriginChampsDiv>
        <SHexagon img="https://rerollcdn.com/characters/Skin/5/Viego.png" />
        <h4>Champ name</h4>
      </ChampionOriginChampsDiv>
      <ChampionOriginChampsDiv>
        <SHexagon img="https://rerollcdn.com/characters/Skin/5/Viego.png" />
        <h4>Champ name</h4>
      </ChampionOriginChampsDiv>
    </ChampionOriginDiv>
  );
};

ChampionOrigin.propTypes = {
  championOrigin: PropTypes.string,
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

const ChampionOriginChampsDiv = styled.div`
  min-width: 29px;
  min-height: 29px;
  max-width: 39px;
  max-height: 100%;
  margin: 13px 3px 0;
  h4 {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }
`;

export default ChampionOrigin;
