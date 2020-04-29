import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import NavBar from "./components/Nav"
import {Container, CssBaseline} from "@material-ui/core"
function App() {

  return (
    <div className="App">
      <NavBar/>
      <Container fixed className="container">
        <CssBaseline />
        <Switch>
          <Route path="/register" render={(props) => <SignUp {...props} />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
