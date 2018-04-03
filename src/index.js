import React from 'react';
import { BrowserRouter as Router,browserHistory, Switch, Route, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Search';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component(){
    render(){
        return (
<Router history = {browserHistory}> 
<Route path = {"/"} component={Root} >
<Indexroute component = {Home} />
<Route path ={"/Users"} component={Users}/>
</Route>
</Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
