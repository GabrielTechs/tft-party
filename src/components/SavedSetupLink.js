import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQueries } from "../assets/mediaQueries";

const SavedSetupLink = (props) => {
  const [linkToShare, setLinkToShare] = useState("-");

  useEffect(() => {
    if (props.idToShare) {
      setLinkToShare(`${window.location.host}/shared/${props.idToShare}`);
    }
  }, [props.idToShare]);

  return <SavedSetupLinkText>{linkToShare}</SavedSetupLinkText>;
};

SavedSetupLink.propTypes = {
  idToShare: PropTypes.string,
};

const SavedSetupLinkText = styled.p`
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 0 0 69px 69px;
  color: ${({ theme }) => theme.secondaryText};
  display: block;
  font-size: 1.5rem;
  padding: 9px 16px;
  text-align: center;
  width: 39%;
  ${mediaQueries("sm")`
  width: 96%;
`}
`;

export default SavedSetupLink;
