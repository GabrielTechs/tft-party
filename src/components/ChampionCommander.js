import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SHexagon from "./SHexagon";

const ChampionCommander = (props) => {
  return (
    <ChampionCommanderDiv>
      <ChampionCommanderImgDiv>
        <SHexagon
          img={props.championImg}
          stroke={props.championCost.toString()}
        />
      </ChampionCommanderImgDiv>
      <h4>{props.championName}</h4>
    </ChampionCommanderDiv>
  );
};

ChampionCommander.propTypes = {
  championImg: PropTypes.string,
  championName: PropTypes.string,
  championCost: PropTypes.number,
};

const ChampionCommanderDiv = styled.div`
  width: 49%;
  margin: 6px auto;
  h4 {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.69rem;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }
`;

const ChampionCommanderImgDiv = styled.div`
  min-width: 69px;
  min-height: 69px;
  max-width: 96px;
  max-height: 100%;
  margin: 0 auto;
`;

export default ChampionCommander;
