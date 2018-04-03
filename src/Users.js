import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './git-logo.png';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';
class Users extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h3>User's List</h3>
        </header>
      
       
      </div>
    );
  }
}

export default Users;
