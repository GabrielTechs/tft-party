import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RulesSpecial = (props) => {
  return (
    <RulesSpecialDiv>
      {props.specialRules.map((specialRule) => (
        <div key={specialRule.specialRuleName}>
          <h2>{specialRule.specialRuleName}: </h2>
          <h3>{specialRule.specialRule}</h3>
        </div>
      ))}
    </RulesSpecialDiv>
  );
};

RulesSpecial.propTypes = {
  specialRules: PropTypes.array,
};

const RulesSpecialDiv = styled.div``;

export default RulesSpecial;
