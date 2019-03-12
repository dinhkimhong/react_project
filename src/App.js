import React, { Component } from 'react';
import Routes from "./Routes";

class App extends Component {
  constructor(){
    super();
    this.state={
      appName: "ERP System",
      home: false
    }
  }
  render() {
    return(
      <Routes/>
    )
  }
}

export default App;
