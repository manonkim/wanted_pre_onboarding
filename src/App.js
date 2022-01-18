import React from "react";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel/Carousel";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Carousel />
    </>
  );
}

export default App;
