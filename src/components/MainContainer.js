import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Title from "./Title";
import Bio from "./Bio";
import Docs from "./Docs";

class MainContainer extends Component {
  render() {
    return (
      <div className="maincontainer">
        <Container fluid="xl">
          <Title />
          <Bio />
          <Docs />
        </Container>
      </div>
    );
  }
}

export default MainContainer;
