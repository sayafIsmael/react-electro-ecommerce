import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import SingleProduct from './pages/single-product/SingleProduct'

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/shop" render={(props) => <Shop {...props} />} />
      <Route exact path="/product/:productId" render={(props) => <SingleProduct {...props} />} />
    </Switch>
  </Router>
  );
}

export default App;
