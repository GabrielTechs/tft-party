import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ChampionOrigin = (props) => {
  return (
    <ChampionOriginDiv>
      <ChampionOriginHexaDiv>
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
