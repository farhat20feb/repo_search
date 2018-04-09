import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ReactDOM from 'react-dom';
import './App.css';

class Searchresult extends Component{
    constructor(props){
    super(props);
    this.state = {items:[],items1:[]}

    }

    componentDidMount(){
     const user = this.props.match.params.uservalue
     fetch(`https://api.github.com/search/repositories?q=${user}`)
     .then((result) => {
       // Get the result
       // If we want text, call result.text()
       return result.json();
     }).then( (jsonResult) => {
         this.setState({
             items1:jsonResult
         });
         //browserHistory.push('/cars')
       // Do something with the result
       //console.log(jsonResult);
       //console.log(this.state.items1)
     })
 }   


    render(){
    const user = this.props.match.params.uservalue
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
             <h3 className="repo-title">{this.state.items1.total_count} Total Repository </h3>
             <Container>
            <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <ListGroup>
        <ListGroupItem><b>Repository</b></ListGroupItem>
        <ListGroupItem>
            <div>
            
        
            <Link to={"/Users/"+user}>Users</Link>
      

      
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
 {listItems.map(item => <h6><ListGroupItem><p className="heading"><Link to={"/Repo/"+item.owner.login+'/'+item.name}>{item.owner.login}/{item.name}</Link></p><br/><p className="desc">{item.description}</p><br/><p className="updated-info"> Updated On:-  {item.pushed_at}</p></ListGroupItem></h6>)}
          </ListGroup></Col>
        </Row>
      </Container>
                </div>
            
        );
    }
}

export default Searchresult;