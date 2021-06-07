import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SHexagon from "./SHexagon";

const ChampionChosen = (props) => {
  return (
    <ChampionChosenDiv>
      <ChampionChosenImgDiv>
        <SHexagon img={props.championImg} stroke="tertiary" />
      </ChampionChosenImgDiv>
      <h4>Hi</h4>
    </ChampionChosenDiv>
  );
};

ChampionChosen.propTypes = {
  championImg: PropTypes.string,
  championName: PropTypes.string,
};

const ChampionChosenDiv = styled.div`
  width: 49%;
  h4 {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.69rem;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }
`;

const ChampionChosenImgDiv = styled.div`
  min-width: 69px;
  min-height: 69px;
  max-width: 96px;
  max-height: 100%;
  margin: 0 auto;
`;

export default ChampionChosen;
