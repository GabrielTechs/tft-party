import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RulesSpecial = (props) => {
  return (
    <RulesSpecialDiv>
      {props.specialRules &&
        props.specialRules.map((specialRule) => (
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

const RulesSpecialDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 15px;
  margin: 26px 0;
  padding: 10px;
  h2 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 6px;
  }
  h3 {
    color: ${({ theme }) => theme.secondaryText};
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 500;
    margin: 6px;
  }
`;

export default RulesSpecial;
