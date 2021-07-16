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
      <ChampionsOriginChampsDiv>
        {props.champions.map((champ, index) => {
          if (champ.traits.includes(props.origin.key)) {
            return (
              <ChampionOriginChampDiv key={index}>
                <SHexagon img={champ.imgUrl} stroke={champ.cost.toString()} />
                <h5>{champ.name}</h5>
              </ChampionOriginChampDiv>
            );
          } else {
            return false;
          }
        })}
      </ChampionsOriginChampsDiv>
    </ChampionOriginDiv>
  );
};

ChampionOrigin.propTypes = {
  origin: PropTypes.object,
  champions: PropTypes.array,
};

const ChampionOriginDiv = styled.div`
  display: flex;
  margin: 6px 0px;
  width: 100%;
`;

const ChampionOriginHexaDiv = styled.div`
  margin: auto 9px auto 0px;
  min-width: 74px;
  text-align: center;
  h5 {
    display: inline-block;
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.16rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }
  svg {
    min-width: 46px;
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
