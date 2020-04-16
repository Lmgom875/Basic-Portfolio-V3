import React, { Component } from "react";
import '../assets/css/Title.css';
import { Row, Col } from "react-bootstrap";

class Title extends Component {
  render() {
    return (
      <Row className= 'titleRow'>
          <Col>
          <h1>title variable</h1>
          <hr />
          </Col>
       </Row>   
    );
  }
}

export default Title;