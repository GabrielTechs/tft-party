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
      <Hexagon
        style={{
          stroke: `${themeContext.primary}`,
          strokeWidth: 30,
        }}
        backgroundImage={props.img}
        backgroundScale={1.001}
      />
    </HexagonDiv>
  );
};

const HexagonDiv = styled.div`
  width: inherit;
  padding: 0.69px;
`;

SHexagon.propTypes = {
  img: PropTypes.string,
  background: PropTypes.string,
};

export default SHexagon;
