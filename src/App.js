import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Button from "./Components/Button.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="bulbBox">
          <Button />
        </div>
      </>
    );
  }
}
export default App;
