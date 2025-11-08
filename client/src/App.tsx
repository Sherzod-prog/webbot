import React from "react";
import { Card } from "./components/card/card";

import "./App.css";

function App() {
  return (
    <>
      <h1>Pizza</h1>
      <p>Welcome to the Pizza App!</p>
      <Card title={""} content={""} />
    </>
  );
}

export default App;
