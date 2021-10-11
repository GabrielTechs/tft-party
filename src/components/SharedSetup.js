import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import useFirestore from "../hooks/useFirestore";
import useSetInfo from "../hooks/useSetInfo";

import RulesModes from "./RulesModes";
import RulesSpecial from "./RulesSpecial";
import PlayerCard from "./PlayerCard";

const SharedSetup = (props) => {
  const { champions, traits, loadingSetInfo } = useSetInfo();

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
          <SharedSetupCards>
            <h1>Players Setup:</h1>
            {!loadingSetInfo ? (
              sharedSetup.playersSetup.map((playerSetup) => (
                <PlayerCard
                  key={playerSetup.player}
                  champions={champions}
                  traits={traits}
                  sharedSetup={playerSetup}
                />
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </SharedSetupCards>
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
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primaryText};
    display: inline-block;
    font-size: 2.69rem;
    font-weight: 500;
    margin: 9px;
    width: 100%;
  }
`;

const SharedActiveRules = styled.div`
  display: flex;
  flex-direction: column;
  margin: 9px;
`;

const SharedSetupCards = styled.div``;

export default SharedSetup;
