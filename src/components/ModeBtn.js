import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModeBtn = (props) => {
  return <SModeBtn>{props.btnValue}</SModeBtn>;
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
`;

ModeBtn.propTypes = {
  btnValue: PropTypes.string,
};

export default ModeBtn;
