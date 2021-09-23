import React from 'react';
import './style.css';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
