import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RerollPlayersSetup = (props) => {
  return (
    <RerollPSDiv>
      <RerollSetupBtn value="Reroll setup" onClick={props.handleRerollSetup}>
        Reroll setup
      </RerollSetupBtn>
    </RerollPSDiv>
  );
};

RerollPlayersSetup.propTypes = {
  handleRerollSetup: PropTypes.func,
};

const RerollPSDiv = styled.div``;

const RerollSetupBtn = styled.button``;

export default RerollPlayersSetup;
