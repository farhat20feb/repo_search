import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ReactDOM from 'react-dom';
import './App.css';
class Users extends Component {
  constructor(props){
    super(props);
    this.state ={items:[]}
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
            items:jsonResult
        });
        
    })
   
  }
  
  render() {
    const test = []
    const array = this.state.items.items
    for (var key in array) {
      test.push(array[key]);
    }
    const listItems = []
    const Score = []
    return (
      
      <div>
        <h2>User's List:{this.props.match.params.val}</h2>
       
        <Container>
            <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>
          <ListGroup>
        <ListGroupItem><b>USERS</b></ListGroupItem>
        <ListGroupItem>
            <div>
            
        
           Repo
      

      
            </div>
        </ListGroupItem>
      </ListGroup>
          </Col>
          <Col sm={{ size: 'auto', offset: 2 }}>
          <ListGroup>
          {Object.keys(test).map((key, index) => {
  const myItem = test[key]
 
  listItems.push(myItem.login);
  listItems.push(<br/>);
  listItems.push('Score:-');
  listItems.push(myItem.score);
  listItems.push(<br/>);
  console.log(myItem.score)
}

)

}
          <p className="heading"> {listItems}</p>
         
            {/* {array = (this.state.items.items)} */}
          </ListGroup></Col>
        </Row>
      </Container>
        
      </div>
     
    );
  }
}
 
export default Users;