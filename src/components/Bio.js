import React, { Component } from "react";
import '../assets/css/Bio.css';
import { Col, Row } from "react-bootstrap";

class Bio extends Component {
  render() {
    return (
      <Row className= 'bioRow'>
        <Col md={4}>
              <img
                id="my-photo"
                className=" img-fluid float-left"
                src=" http://placehold.it/350x256"
                alt="User"
              />
            </Col>
            <Col md={8}>
              <p id="personalInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, explicabo odio quidem eligendi esse ut, assumenda
                voluptate veniam voluptas minus consectetur perspiciatis alias
                corporis provident inventore, soluta sunt quod numquam! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                explicabo odio quidem eligendi esse ut, assumenda voluptate
                veniam voluptas minus consectetur perspiciatis alias corporis
                provident inventore, soluta sunt quod numquam! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Molestiae, explicabo odio
                quidem eligendi esse ut, assumenda voluptate veniam voluptas
                minus consectetur perspiciatis alias corporis provident
                inventore, soluta sunt quod numquam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Molestiae, explicabo odio quidem
                eligendi esse ut, assumenda voluptate veniam voluptas minus
                consectetur perspiciatis alias corporis provident inventore,
                soluta sunt quod numquam!
              </p>
            </Col>
      </Row>
    );
  }
}

export default Bio;