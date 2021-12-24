import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Box from "./Components/Box.js";
import Bulb from "./Components/Bulb.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="bulbBox">
          <Box />
        </div>
      </>
    );
  }
}
export default App;