import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Manager from '~/pages/Manager/TechList';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Repository from '~/pages/Repository';

import Main from '~/pages/Main';

import Project from '~/pages/Project';
import List from '~/pages/List';
import Task from '~/pages/Task';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/manager" component={Manager} isPrivate />
      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/repository" component={Repository} isPrivate />

      <Route path="/main" component={Main} isPrivate />

      <Route path="/project/new/:id" component={Project} isPrivate />
      <Route path="/list/new/:id" component={List} isPrivate />
      <Route path="/task/new/:id" component={Task} isPrivate />
    </Switch>
  );
}
