import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from '../pages/styles';

import HomePage from '../pages/Homepage';
import Header from '../components/Header';
import StartPage from '../pages/StartPage';
import ExitPage from '../pages/Exit';

const Routes: React.FC = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/start" component={StartPage} />
        <Route path="/exit" component={ExitPage} />
      </Switch>
    </Container>
  );
};

export default Routes;
