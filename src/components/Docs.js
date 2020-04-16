import React, { Component } from "react";
import "../assets/css/Docs.css";

import { Row, Col } from "react-bootstrap";

import Doc from '../assets/image/LuisResumeImage.jpg';
//todo Image response
class Docs extends Component {
  render() {
    return (
        <Row className= 'docsRow'>
        <Col xl={12}>
          <img
            src= { Doc }
            id="resumeImage"
            alt="Luis Resume"
          />
        </Col>
      </Row>
    );
  }
}

export default Docs;