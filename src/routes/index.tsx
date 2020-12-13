import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { Container, Content } from '../pages/styles';

import HomePage from '../pages/Homepage';
import Header from '../components/Header';

const Routes: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* <Redirect from="/" to="/home" /> */}
        </Switch>
      </Content>
    </Container>
  );
};

export default Routes;
