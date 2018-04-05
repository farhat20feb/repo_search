import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Search from './Search';
import Users from './Users';
import './App.css';

class App extends Component {
  render() {
    
    return (
      
      <div className="App">
     
       <BrowserRouter>
          <Switch>
          <Route exact path ="/" component={Search}/>
        <Route exact path ="/Users/:val" component={Users}/>
          </Switch>
        </BrowserRouter>
        
       
      </div>
    );
  }
}

export default App;
