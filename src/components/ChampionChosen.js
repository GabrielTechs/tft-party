import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SHexagon from "./SHexagon";

const ChampionChosen = (props) => {
  return (
    <ChampionChosenDiv>
      <ChampionChosenImgDiv>
        <SHexagon background={true} />
      </ChampionChosenImgDiv>
      <h4>Hi</h4>
    </ChampionChosenDiv>
  );
};

ChampionChosen.propTypes = {
  championImg: PropTypes.string,
  championName: PropTypes.string,
};

const ChampionChosenDiv = styled.div``;

const ChampionChosenImgDiv = styled.div``;

export default ChampionChosen;
