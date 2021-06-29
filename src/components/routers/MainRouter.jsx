import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import MarketPage from '../pages/MarketPage';
import Client from '../commons/Client';
import AfterGame from '../../game/AfterGame';

export default function MainRouter() {
  return (
    <>
    <AfterGame />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Switch>
          <Route exact path='/marketplace-freelances' component={MarketPage} />
        </Switch>
        <Switch>
          <Route exact path='/marketplace-clients' component={Client} />
        </Switch>
        <Switch>
          <Route exact path='/game' component={GamePage} />
        </Switch>
      </Router>
    </>
  );
}
