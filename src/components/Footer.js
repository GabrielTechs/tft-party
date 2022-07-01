import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <h1>
        tftParty isn&#8217;t endorsed by Riot Games and doesn&#8217;t reflect
        the views or opinions of Riot Games or anyone officially involved in
        producing or managing League of Legends. League of Legends and Riot
        Games are trademarks or registered trademarks of Riot Games, Inc. League
        of Legends © Riot Games, Inc.
      </h1>
      <h2>©tftParty 2022. Designed by Gabriel H. Alguacil.</h2>
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(
    169deg,
    ${({ theme }) => theme.primary} 36%,
    ${({ theme }) => theme.secondary} 96%
  );
  padding: 69px;
  h1 {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.69rem;
    font-weight: 500;
    text-align: center;
  }
  h2 {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 1.36rem;
    margin-top: 69px;
    font-weight: 400;
    text-align: center;
  }
`;

export default Footer;
