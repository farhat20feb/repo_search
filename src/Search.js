import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './git-logo.png';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';
class Search extends Component {
    constructor(props){
        super(props);
      }
state = {
    name : ''
};
change = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};
    render(){
      
        return(
         <div>
         <header className="header">
          <img src={logo} className="logo" alt="logo" />
          </header>
        <input onChange = {e => this.change(e)}  className="search-box" name="name" placeholder="Type your Search" value={this.state.name}/><br/> <br/> 
        <Link to={/Searchresult/+this.state.name}><Button bsStyle="primary">Submit</Button></Link>
            
         </div>
            
        );
       

    }
}
export default Search;