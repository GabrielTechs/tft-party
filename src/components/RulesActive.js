import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RulesActive = (props) => {
  return (
    <RulesDiv>
      <h1>Rules active:</h1>
      <RulesContainerDiv>
        <h1>Mode:</h1>
        <h2>mode name</h2>
        <h2>mode description</h2>
        <h1>Mode rules:</h1>
        <h2>rule</h2>
      </RulesContainerDiv>
      <RulesContainerDiv>
        <h1>Special rules:</h1>
        <h2>- special Rule.</h2>
      </RulesContainerDiv>
    </RulesDiv>
  );
};

RulesActive.propTypes = {
  modes: PropTypes.string,
  advancedRules: PropTypes.string,
};

const RulesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const RulesContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RulesActive;
