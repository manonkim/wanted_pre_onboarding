import React from "react";
import styled from "styled-components";

export default function Slide({ src, alt }) {
  return <IMG src={src} alt={alt} />;
}

const IMG = styled.img`
  @media only screen and (max-width: 1200px) {
    margin-top: -50px;
  }

  width: 100%;
  margin: 0 10px;
  border-radius: 5px;
`;
