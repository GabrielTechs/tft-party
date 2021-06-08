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

const ChampionOriginDiv = styled.div``;

const ChampionOriginHexaDiv = styled.div``;

const ChampionOriginChampsDiv = styled.div``;

export default ChampionOrigin;
