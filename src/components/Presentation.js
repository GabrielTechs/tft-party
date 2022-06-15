import React from "react";
import styled from "styled-components";
import useImagesByName from "../hooks/useImagesByName";

const Presentation = () => {
  const { image } = useImagesByName("intro");

  return (
    <PresentationDiv>
      <img src={image.imgUrl} alt=""></img>
    </PresentationDiv>
  );
};

const PresentationDiv = styled.div`
  border-radius: 69px;
  max-height: 300px;
  width: 75%;
  background-size: cover;
  overflow: hidden;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Presentation;
