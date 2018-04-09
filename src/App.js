import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Search from './Search';
import Users from './Users';
import Repo from './Repo';
import Searchresult from './Searchresult';
import './App.css';

class App extends Component {
  render() {
    
    return (
      
      <div className="App">
     
       <BrowserRouter>
          <Switch>
          <Route exact path ="/" component={Search}/>
        <Route exact path ="/Users/:val" component={Users}/>
        <Route exact path ="/Repo/:val/:value" component={Repo}/>
        <Route exact path ="/Searchresult/:uservalue" component={Searchresult}/>
          </Switch>
        </BrowserRouter>
        
       
      </div>
    );
  }
}

export default App;
