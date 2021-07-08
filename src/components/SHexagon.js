import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { championCostColor } from "../assets/colors";

import Hexagon from "react-hexagon";

const SHexagon = (props) => {
  const themeContext = useContext(ThemeContext);
  const [stroke, setStroke] = useState(themeContext.primary);

  useEffect(() => {
    if (props.stroke === "secondary") {
      setStroke(themeContext.secondary);
    } else if (props.stroke === "tertiary") {
      setStroke(themeContext.tertiary);
    } else if (props.stroke === "black") {
      setStroke("black");
    } else if (
      props.stroke === "1" ||
      props.stroke === "2" ||
      props.stroke === "3" ||
      props.stroke === "4" ||
      props.stroke === "5"
    ) {
      setStroke(championCostColor[props.stroke - 1]);
    } else {
      setStroke(themeContext.primary);
    }
  }, [props.stroke, themeContext]);

  return (
    <HexagonDiv>
      {props.img ? (
        <Hexagon
          style={{
            stroke: `${stroke}`,
            strokeWidth: 20,
          }}
          backgroundImage={props.img}
          backgroundScale={1.001}
        />
      ) : props.background ? (
        <Hexagon
          className="umbrella"
          style={{
            stroke: `${stroke}`,
            strokeWidth: 30,
            fill: `${stroke}`,
          }}
          backgroundScale={1.001}
        >
          {props.icon && (
            <image href={props.icon} x="26%" y="26%" height="49%" width="49%" />
          )}
        </Hexagon>
      ) : (
        <Hexagon
          style={{
            stroke: `${stroke}`,
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
  traitBg: PropTypes.string,
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
