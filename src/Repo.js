import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container, Row, Col, Media, Nav, NavItem, NavLink, Badge, Button } from 'reactstrap';
import logo from './profl.png';
import map from './map.png';
import env from './envelope.png';
import circle from './circle.png';
const pStyle = {
  fontSize: '17px',
  fontWeight:600,
  color:'blue',
  marginTop:'15px'
};

const bstyle = {
  listStyle: 'none',
  textAlign: 'left',
  fontFamily:'monospace'
};
const hstyle = {
  fontWeight: '700',
  marginTop: '7px',
  fontSize: '20px',
  fontFamily: 'monospace'
};
class Repo extends Component {
  
    constructor(props){
      super(props);
      this.state ={items:[],items1:[]}
      }

      componentDidMount() {
    
        const userid = this.props.match.params.val;
        fetch(`https://api.github.com/users/${userid}`)
        .then((result) => {
          // Get the result
          // If we want text, call result.text()
          return result.json();
        }).then( (jsonResult) => {
            this.setState({
                items:jsonResult
            });

            
          // Do something with the result
          //console.log(jsonResult);
          console.log(this.state.items)
    
          
        })
      }     
      componentWillMount() {
        const userid = this.props.match.params.val;
        fetch(`https://api.github.com/users/${userid}/repos`)  
        .then((result) => {
          return result.json();
        }).then( (jsonResult) => {
          this.setState({
            items1:jsonResult
          });
         // console.log(this.state.items1)
        })
        
      }
      render() {
        let avtar =  this.state.items.avatar_url
        let followers =  this.state.items.followers
        let following = this.state.items.following
        let repo = this.state.items.public_repos
        let name = this.state.items.name
        let loc = this.state.items.location
        let email = this.state.items.email
        const arraylist = []
        let repolist = this.state.items1
       //console.log(repolist)
        return (
      
            <div>
              
              <h2 style={pStyle}>{this.props.match.params.val} / {this.props.match.params.value}</h2>
              <Container>
            <Row>
          <Col sm={{ size: 'auto'}}>
          <Media>
          <Media left href="#">
      
          <Media object src={avtar} alt="image" className="profile-image"/>
      </Media>
      <Media body>
     
  </Media>
  </Media>
  <p style={hstyle}>{name}</p>
  <ul style={bstyle}>
<li><img src={map}/> {(loc) ? loc : 'Not defined'}</li>
<li><img src={env}/> {(email) ? email : 'Not defined'}</li>
    </ul>
          </Col>
          <Col sm={{ size: '7', offset: 1 }}>
          <Nav>
          <NavItem>
            <NavLink><Button color="primary" outline>
            Repositories <Badge color="secondary">{repo}</Badge>
        </Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Button color="primary" outline>
            Followers <Badge color="secondary">{followers}</Badge>
        </Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Button color="primary" outline>
            Following <Badge color="secondary">{following}</Badge>
        </Button></NavLink>
          </NavItem>
        </Nav>
        <hr />
        <h6 style={{textAlign: 'left'}}> Repositories List</h6>
       
        <ListGroup>
        {repolist.map(item => <h6><ListGroupItem><a href={item.html_url} target="_blank"> <p className="heading">{item.name}</p></a><br/><p className="desc">{item.description}</p><br/><p className="updated-info"> <img src={circle}/> {(item.language) ? item.language : 'Not defined'}</p></ListGroupItem></h6>)}
      </ListGroup>
          
          </Col>
          </Row>
      </Container>
              </div>
              )

      }
    }
    export default Repo;