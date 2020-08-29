import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home'

const intigerN: number = 12;

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="" render={(props) => <Home {...props} />} />
    </Switch>
  </Router>
  );
}

export default App;
