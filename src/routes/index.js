import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './Home';
import Users from '../Users';

class Routes extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
          <Route exact path ="/" component={Home}/>
        <Route exact path ="/Users" component={Users}/>
          </Switch>
        </BrowserRouter>
      );
    }
  }

export default Routes;