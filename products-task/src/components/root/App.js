import React from "react";
import { Container } from "reactstrap";
import Navigation from "../navigation/Navigation";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Container>
        <Navigation />
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
