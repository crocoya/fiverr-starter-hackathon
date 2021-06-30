import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';
import MarketPage from '../pages/MarketPage';
import DashboardPro from '../pages/DashboardPro';
import ClientProject from '../pages/ClientProject';
import AfterGame from '../pages/AfterGame';
import Thanks from '../pages/Thanks';

export default function MainRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/marketplace-freelances" component={MarketPage} />
          <Route exact path="/thanks" component={Thanks} />

          <Route exact path="/dashboard-freelances" component={DashboardPro} />
          <Route exact path="/clientProject" component={ClientProject} />
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/afterGame" component={AfterGame} />
          <Route exact path="/gamefinish" component={AfterGame} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}
