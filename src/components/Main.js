import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import UserRouter from './UserRouter';

const Main = () => (
  <div className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={UserRouter}/>
    </Switch>
  </div>
);

export default Main;
