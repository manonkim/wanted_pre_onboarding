import React from "react";
import styled from "styled-components";

export default function Slide({ src, alt }) {
  return <IMG src={src} alt={alt} />;
}

const IMG = styled.img`
  margin: 0 10px;
  border-radius: 5px;
  height: 300px;
  width: 100%;
`;
