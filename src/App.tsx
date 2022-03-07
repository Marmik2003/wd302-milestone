import React, { useState } from "react";

import Container from "./components/Container";
import Header from "./components/Header";
import Home from "./components/Home";
import HomeForm from "./components/HomeForm";

function App() {
  const [state, setState] = useState("HOME");

  return (
    <Container>
      <Header />
      {state === "HOME" ? (
        <Home setHomeState={setState} />
      ) : (
        <HomeForm setHomeState={setState} homeState={state} />
      )}
    </Container>
  );
}

export default App;
