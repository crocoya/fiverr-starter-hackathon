import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import MarketPage from '../pages/MarketPage';
import DashboardPro from '../pages/DashboardPro';
import Client from '../commons/Client';
import ClientProject from '../pages/ClientProject';
import AfterGame from '../pages/AfterGame';

export default function MainRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/marketplace-freelances" component={MarketPage} />

          <Route exact path="/dashboard-freelances" component={DashboardPro} />
          <Route exact path="/clientProject" component={ClientProject} />
          <Route exact path="/marketplace-clients" component={Client} />
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/afterGame" component={AfterGame} />
          <Route exact path="/gamefinish" component={AfterGame} />
        </Switch>
      </Router>
    </>
  );
}
