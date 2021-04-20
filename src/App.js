import React, { Suspense } from "react";
import "./App.css";

import Nav from "./Nav";
import Landing from "./Landing";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Landing />
    </React.Fragment>
  );
}

export default App;
