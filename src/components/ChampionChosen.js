import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ChampionChosen = (props) => {
  return (
    <ChampionChosenDiv>
      <ChampionChosenImgDiv></ChampionChosenImgDiv>
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
