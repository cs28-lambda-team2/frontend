import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import NavBar from "./components/Nav"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/register" render={(props) => <SignUp {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
