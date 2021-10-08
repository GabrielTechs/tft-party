import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import useFirestore from "../hooks/useFirestore";

import RulesModes from "./RulesModes";
import RulesSpecial from "./RulesSpecial";

const SharedSetup = (props) => {
  const sharedSetupDoc = useFirestore(
    "sharedSetups",
    "__name__",
    props.setupId
  );

  return (
    <SharedSetupDiv>
      {sharedSetupDoc.docsCategory.map((sharedSetup) => (
        <Fragment key={sharedSetup.id}>
          <h1>Mode:</h1>
          <SharedActiveRules>
            <RulesModes
              key={sharedSetup.modeActive.modeName}
              mode={sharedSetup.modeActive}
            />
          </SharedActiveRules>
          {sharedSetup.specialRulesActive.length > 0 && (
            <SharedActiveRules>
              <h1>Special Rules:</h1>
              <RulesSpecial
                key={sharedSetup.specialRulesActive.specialRuleName}
                specialRules={sharedSetup.specialRulesActive}
              />
            </SharedActiveRules>
          )}
        </Fragment>
      ))}
    </SharedSetupDiv>
  );
};

SharedSetup.propTypes = {
  setupId: PropTypes.string,
};

const SharedSetupDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 69px;
  padding: 10px;
`;

const SharedActiveRules = styled.div``;

export default SharedSetup;
