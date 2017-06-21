import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardDeck,
  CardTitle, CardSubtitle, Button, Collapse, Container, Jumbotron, Navbar,
  NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Timeline } from 'react-twitter-widgets'
import './App.css';
import rocket from './img/spacex-71873.jpg';
import siteFlow from './img/site_flow.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Navbar toggleable>
          <NavbarToggler right />
          <NavbarBrand href="/">mikevillis</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://blog.mikevillis.com">Blog</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        <Jumbotron fluid className="jumbo-over">
          <Container fluid>
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
            <h1>Mike Villis</h1>
            <p className="lead">Technology Adventures</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col><h3>Recent Activity</h3></Col>
          </Row>
          <Row>
            <Col><hr /></Col>
          </Row>
          <Row>
              <CardDeck>
                <Card>
                  <CardImg top width="100%" src={rocket} alt="Rocket" />
                  <CardBlock>
                    <CardTitle>First Blog</CardTitle>
                    <CardSubtitle>Let&apos;s go!</CardSubtitle>
                    <CardText>I&apos;ve been sitting on mikevillis.com for almost 12 months now. At the time of...</CardText>
                    <Button href='https://medium.com/bikebytes/launch-55583c4df741'>Read More</Button>
                  </CardBlock>
                </Card>
                <Card>
                  <CardImg top width="100%" src={siteFlow} alt="Pipeline for Github Pages" />
                  <CardBlock>
                    <CardTitle>Simple React Site with create-react-app, Github pages, Travis CI and CloudFlare</CardTitle>
                    <CardSubtitle>The foundations of mikevillis.com</CardSubtitle>
                    <CardText>There’s no shortage of tools and frameworks out there to help you build...</CardText>
                    <Button href='https://medium.com/bikebytes/simple-react-site-with-create-react-app-github-pages-travis-ci-and-cloudflare-8a859daa881'>Read More</Button>
                  </CardBlock>
                </Card>
              </CardDeck>
          </Row>
          <Row className='margin'>
            <Col><h3>Tweets</h3></Col>
          </Row>
          <Row>
            <Col><hr /></Col>
          </Row>
          <Row>
            <Col>
              <div className='Twitter'>
                <Timeline
                  dataSource={{
                    sourceType: 'profile',
                    screenName: 'mvillis'
                  }}
                  options={{
                    username: 'mvillis',
                    height: '500'
                  }}
                  onLoad={() => console.log('Timeline is loaded!')}
                />
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
