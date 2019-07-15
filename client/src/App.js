import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/SavedBooks";
import Detail from "./pages/HomePage";
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
          <Route exact path="/books" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
