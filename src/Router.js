import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import MainContainer from "./components/MainContainer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Error from "./components/Error";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Container fluid="xl">
          <Title />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/home" component={MainContainer} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default Router;
