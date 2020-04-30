import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NavBar from "./components/Nav"
import PrivateRoute from "./components/PrivateRoute"
import GamePage from "./components/GamePage"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/register"  render={(props) => <SignUp {...props} />} />
        <Route path="/login" render={(props) => <SignIn {...props} />} />
        <PrivateRoute exact path="/game" render ={(props) => <GamePage {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
