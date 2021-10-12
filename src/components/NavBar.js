import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useImagesByName from "../hooks/useImagesByName";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggleBtn from "./ThemeToggleBtn";

const NavBar = (props) => {
  const { image } = useImagesByName("logo-horizontal-w");

  return (
    <NavContainer>
      <div className="logo">TFT Party</div>
      <ul>
        <li>
          <Link to="/" alt="home">
            <FontAwesomeIcon icon={["fa", "home"]} size="1x" />
          </Link>
        </li>
        <li>
          <Link to="/rules" alt="rules">
            <FontAwesomeIcon icon={["fa", "list-ul"]} size="1x" />
          </Link>
        </li>
        <li>
          <ThemeToggleBtn themeToggler={props.themeToggler} icon={props.icon} />
        </li>
      </ul>
    </NavContainer>
  );
};

NavBar.propTypes = {
  themeToggler: PropTypes.func,
  icon: PropTypes.array,
};

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  border-radius: 0px 0px 10px 10px;
  background: ${({ theme }) => theme.primary};
  opacity: 0.8;
  transition: 0.6s;
  z-index: 200;
  :hover {
    opacity: 1;
  }

  .logo {
    height: 50px;
    width: 200px;
    margin: auto 0;
    text-align: center;
    font-size: 3rem;
    color: white;
  }

  & ul {
    list-style: none;
    display: flex;
    margin-right: 10px;
    padding: 0 5px;
  }
  & a {
    color: ${({ theme }) => theme.secondaryText};
    text-decoration: none;
    font-size: 2rem;
    padding: 15px 10px;
    border-radius: 5px;
    transition: 0.8s;
    :hover {
      background-color: ${({ theme }) => theme.secondary};
    }
    :active {
      background-color: var(--secondary-color, lightseagreen);
    }
  }
`;

export default NavBar;
