import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GamePage from '../pages/GamePage';
import MarketPage from '../pages/MarketPage';

export default function MainRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={MarketPage} />
        </Switch>
        <Switch>
          <Route exact path='/game' component={GamePage} />
        </Switch>
      </Router>
    </>
  );
}
