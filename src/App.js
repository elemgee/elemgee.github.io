import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './images/WebfarmLogoLarge.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo img-responsive" 
          alt="Webfarm, Inc."  />

        </div>
  <div className="col-md-4 values"><div className=" glyphicon glyphicon-user" > </div></div>
  <div className="col-md-4 values"><div className=" glyphicon glyphicon-wrench" > </div></div>
  <div className="col-md-4 values"><div className=" glyphicon glyphicon-eye-open" > </div></div>
      </div>
    );
  }
}

export default App;
