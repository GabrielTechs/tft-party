import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <h1>
        tftParty was created under Riot Games &quot;Legal Jibber Jabber&quot;
        policy using assets owned by Riot Games. Riot Games does not endorse or
        sponsor this project.
      </h1>
      <h2>
        Diseñado por Gabriel H. Alguacil © 2021 Todos los derechos reservados.
      </h2>
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
