import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import SavedBooks from "./pages/SavedBooks";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Saved" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
