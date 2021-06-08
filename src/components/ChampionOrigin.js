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
        <h4>Champ name</h4>
      </ChampionOriginChampsDiv>
      <ChampionOriginChampsDiv>
        <h4>Champ name</h4>
      </ChampionOriginChampsDiv>
      <ChampionOriginChampsDiv>
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
