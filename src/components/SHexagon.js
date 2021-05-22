import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Hexagon from "react-hexagon";

const SHexagon = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <HexagonDiv>
      {props.img ? (
        <Hexagon
          style={{
            stroke: `${themeContext.primary}`,
            strokeWidth: 20,
          }}
          backgroundImage={props.img}
          backgroundScale={1.001}
        />
      ) : props.background ? (
        <Hexagon
          className="umbrella"
          style={{
            stroke: `${themeContext.primary}`,
            strokeWidth: 30,
            fill: `${themeContext.primary}`,
          }}
          backgroundScale={1.001}
        >
          {props.icon && (
            <image href={props.icon} x="16%" y="16%" height="69%" width="69%" />
          )}
        </Hexagon>
      ) : (
        <Hexagon
          style={{
            stroke: `${themeContext.primary}`,
            strokeWidth: 30,
          }}
          backgroundScale={1.001}
        />
      )}
    </HexagonDiv>
  );
};

SHexagon.propTypes = {
  img: PropTypes.string,
  background: PropTypes.bool,
  icon: PropTypes.string,
  stroke: PropTypes.string,
};

const HexagonDiv = styled.div`
  max-height: 100%;
  max-width: 100%;
  padding: 0.69px;
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default SHexagon;
