import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Search from "./pages/Search";
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
} from "@material-ui/core";

const themeGreen = createMuiTheme({
  palette: {
    background: {
      default: "#52b788",
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={themeGreen}>
        <CssBaseline />
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Search} />
            <div className="container">
              <Route exact path="/search" component={Search} />
              <Route exact path="/register" component={Signin} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
