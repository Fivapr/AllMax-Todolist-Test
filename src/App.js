import React, { Component } from "react";
import Todos from "./Todos/Todos";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Todos />
      </MuiThemeProvider>
    );
  }
}

export default App;
