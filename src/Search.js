import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './git-logo.png';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Users from './Users';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';
class Search extends Component {
    constructor(props){
        super(props);
        this.state ={items:[],items1:[],items2:[],isLoading: true,isLoading1: true,isLoading2: true}
      }
state = {
    name : ''
};

handleClick(props) {
    
    const userid = props;
    fetch(`https://api.github.com/users/${userid}`)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then( (jsonResult) => {
        this.setState({
            items1:jsonResult,
            isLoading1: false,
        });
        //browserHistory.push('/cars')
      // Do something with the result
      //console.log(jsonResult);
      //console.log(this.state.items1)

      
    })
    fetch(`https://api.github.com/users/${userid}/repos`)
    .then((result1) => {
      // Get the result
      // If we want text, call result.text()
      return result1.json();
    }).then( (jsonResult1) => {
        this.setState({
            items2:jsonResult1
        });
       // console.log(this.state.items2)
    })
  }
handleUser(){
    this.setState({
        isLoading:false,
        isLoading1: false,
        isLoading2: false
    });
}
onSubmit = e => {
		
    e.preventDefault();
   
      const user =  (this.state.name);

      
      
    fetch(`https://api.github.com/search/repositories?q=${user}`)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then( (jsonResult) => {
        this.setState({
            items:jsonResult,
            isLoading: false,
        });
        //browserHistory.push('/cars')
      // Do something with the result
      //console.log(jsonResult);
     // console.log(this.state.items)
    })
    
}
change = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};
    render(){
        if(this.state.isLoading){
        return(
         <div>
         <header className="header">
          <img src={logo} className="logo" alt="logo" />
          </header>
        <input onChange = {e => this.change(e)}  className="search-box" name="name" placeholder="Type your Search" value={this.state.name}/><br/> <br/> 
            <Button bsStyle="primary" onClick={e => this.onSubmit(e)}>Submit</Button>
            
         </div>
            
        );
    }
    let items =  this.state.items.items
    //console.log(items);
    if(this.state.isLoading1){
    return(
      
    <div>
        
    <h3>Repository Result</h3>
    <Container>
            <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <ListGroup>
        <ListGroupItem><b>Repository</b></ListGroupItem>
        <ListGroupItem><Router>
            <div>
               
            <Link to={'/Users'} onClick={(e) => this.handleUser()}>Users</Link>
        
               
               <Switch>
               <Route exact path='/Users' component={Users} />
                
               </Switch>
            </div>
         </Router></ListGroupItem>
      </ListGroup>
          </Col>
          <Col sm={{ size: 'auto', offset: 2 }}>
          <ListGroup>
           {items.map(item => <h6><ListGroupItem><p className="heading" onClick={(e) => this.handleClick(item.owner.login)}>{item.owner.login}</p> <br/> {item.name}<br/> Updated On:- {item.pushed_at}</ListGroupItem></h6>)}</ListGroup></Col>
        </Row>
      </Container>
    
    </div>

      );
    }
    if(this.state.isLoading2){
        const arraylist = []
    return(
       
        <div>
      <h3>User Profile</h3>
      <Container>
            <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
          
              <img src={this.state.items1.avatar_url} className="profile-image"/>
          </Col>
          <Col sm={{ size: 'auto', offset: 2 }}>
          <h4>{this.state.items1.login}</h4>
          <h5>{this.state.items1.name}</h5>
          <h5>Followers:- {this.state.items1.followers}  Followings:- {this.state.items1.following}</h5>
          <h5>Repositories:- {this.state.items1.public_repos}</h5>
          <h5>List of Repositories:-</h5>
          {this.state.items2.map(function(item,i) {
             //console.log(i)
             arraylist.push(item.name);
             arraylist.push(<br/>);
               //{item.prop.name[i]}
              
             
       //console.log(item.name)
})}
{arraylist}
          </Col>
          </Row>
      </Container>
       </div>
       
    ) 
   
}

    }
}
export default Search;