import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Hexagon from "react-hexagon";

const SHexagon = (props) => {
  const themeContext = useContext(ThemeContext);
  const img = props.img;

  return (
    <HexagonDiv>
      {img ? (
        <Hexagon
          style={{
            stroke: `${themeContext.primary}`,
            strokeWidth: 30,
          }}
          backgroundImage={props.img}
          backgroundScale={1.001}
        />
      ) : (
        <Hexagon
          style={{
            stroke: `${themeContext.primary}`,
            strokeWidth: 30,
            fill: `${props.background}`,
          }}
          backgroundScale={1.001}
        />
      )}
    </HexagonDiv>
  );
};

SHexagon.propTypes = {
  img: PropTypes.string,
  background: PropTypes.string,
};

const HexagonDiv = styled.div`
  height: 100%;
  padding: 0.69px;
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default SHexagon;
