import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

const SaveSetupBtn = (props) => {
  return <SBtnSaveSetup>Get link to share</SBtnSaveSetup>;
};

SaveSetupBtn.propTypes = {
  shareSetup: PropTypes.func,
};

const SBtnSaveSetup = styled.button`
  border: none;
  border-radius: 69px 69px 0 0;
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
  width: 39%;
  min-width: 169px;
  transition: all 0.6s ease 0s;
  :hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.26),
      0 16px 19px 0 rgba(0, 0, 0, 0.19);
  }
  :active {
    background: ${({ theme }) => theme.secondary};
  }
  ${mediaQueries("sm")`
  width: 96%;
`}
`;

export default SaveSetupBtn;
