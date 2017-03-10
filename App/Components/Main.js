import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Search from './search';
import Dashboard from './dashboard';
import Profile from './Profile';
import Repositories from './Repositories';
import Notes from './Notes.js';
export default class Main extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="search" component={Search} title="Search" initial={true} />
          <Scene key="dashboard" component={Dashboard} title="Dashboard"  />
          <Scene key="profile" component={Profile} title="profile"  />
          <Scene key="repositories" component={Repositories} title="Repositories"  />
          <Scene key="notes" component={Notes} title="Notes"  />
        </Scene>
      </Router>
    )
  }
}
