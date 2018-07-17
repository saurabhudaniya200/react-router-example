import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './Users';
import User from './User';
import EditUser from './EditUser';

const UserRouter = () => (
  <Switch>
    <Route exact path='/users' component={Users}/>
    <Route exact path='/users/:id' component={User}/>
    <Route exact path='/users/:id/edit' component={EditUser}/>
  </Switch>
);

export default UserRouter;
