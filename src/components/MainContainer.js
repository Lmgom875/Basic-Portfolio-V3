import React, { Component } from "react";
//import { Container } from "react-bootstrap";

import Bio from "./Bio";
import Docs from "./Docs";

class MainContainer extends Component {
  render() {
    return (
      <div className="maincontainer">
        <Bio />
        <Docs />
      </div>
    );
  }
}

export default MainContainer;
