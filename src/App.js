import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import ShipmentDetails from './components/shipmentDetails/shipmentDetails';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={ShipmentDetails} />
      </div>
    </Router>
  );
}

export default App;
