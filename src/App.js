import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

//! Import components
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
    </div>
  );
}

export default App;
