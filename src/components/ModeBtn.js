import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { mediaQueries } from "../assets/mediaQueries";

import { useActiveRules } from "../contexts/ActiveRulesContext";

const ModeBtn = (props) => {
  const { modeActive, changeMode } = useActiveRules();

  let modeBtnActive = "";
  if (modeActive.modeName === props.btnValue) {
    modeBtnActive = "mode-btn-active";
  }

  return (
    <SModeBtn
      className={modeBtnActive}
      value={props.btnValue}
      onClick={(event) => {
        changeMode(event.target.value);
      }}
    >
      {props.btnValue}
    </SModeBtn>
  );
};

ModeBtn.propTypes = {
  btnValue: PropTypes.string,
};

const SModeBtn = styled.button`
  border: none;
  border-radius: 69px;
  box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.6rem;
  text-decoration: none;
  padding: 9px 16px;
  margin: 19px;
  width: 19%;
  min-width: 169px;
  transition: all 0.6s ease 0s;
  :hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.26),
      0 16px 19px 0 rgba(0, 0, 0, 0.19);
  }
  &.mode-btn-active {
    background: ${({ theme }) => theme.tertiary};
  }
  ${mediaQueries("md")`
    width: 39%;
  `}
  ${mediaQueries("sm")`
    width: 96%;
  `}
`;

export default ModeBtn;
