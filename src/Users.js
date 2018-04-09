import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import ReactDOM from 'react-dom';
import './App.css';
class Users extends Component {
  constructor(props){
    super(props);
    this.state ={items:[],items1:[]}
  }

  componentWillMount(){
    const user = this.props.match.params.val
    fetch(`https://api.github.com/search/users?q=${user}`)
    .then((result) => {
      // Get the result
      // If we want text, call result.text()
      return result.json();
    }).then( (jsonResult) => {
        this.setState({
            items1:jsonResult
        });
        
    })
   
  }
  
  render(){
    const user = this.props.match.params.val
    const test = []
    const array = this.state.items1.items
    for (var key in array) {
      test.push(array[key]);
    }
    const listItems = []
    let repolist =  this.state.items1.items
       // console.log(repolist)
        return (
            <div>
             <h3 className="repo-title">{this.state.items1.total_count} Total Users</h3>
             <Container>
            <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <ListGroup>
        <ListGroupItem><b>Users</b></ListGroupItem>
        <ListGroupItem>
            <div>
            
        
            <Link to={"/Searchresult/"+user}>Repositories</Link>
      

      
            </div>
        </ListGroupItem>
      </ListGroup>
          </Col>
          <Col sm={{ size: '8', offset: 1 }}>
          <ListGroup>
          {Object.keys(test).map((key, index) => {
  const myItem = test[key]
 
  listItems.push(myItem);
 
}
)
}
{console.log(listItems)}
 {listItems.map(item => <h6><ListGroupItem>    <Media>
      <Media left href="#">
        <Media object src={item.avatar_url} className="small-profile"/>
      </Media>
      <Media body>
        <Media heading>
      <p className="media-head">  <Link to={"/Repo/"+item.login+'/'+item.type}>{item.login}</Link></p>
      <p className="score"> Score:- {item.score}</p>
        </Media>
      
       
      </Media>
      
    </Media>
    
   </ListGroupItem></h6>)}
          </ListGroup></Col>
        </Row>
      </Container>
                </div>
            
        );
    }
}
 
export default Users;