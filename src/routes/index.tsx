import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, Content } from '../pages/styles';

import HomePage from '../pages/Homepage';
import Header from '../components/Header';
import StartPage from '../pages/StartPage';

const Routes: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/start" component={StartPage} />

          {/* <Redirect from="/" to="/home" /> */}
        </Switch>
      </Content>
    </Container>
  );
};

export default Routes;
