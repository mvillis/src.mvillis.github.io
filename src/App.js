import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import { Timeline } from 'react-twitter-widgets'
import './App.css';
import rocket from './spacex-71873.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
          <h2>Mike Villis</h2>
        </div>
        <Container>
          <Row>
            <Col><h3>Blogs</h3></Col>
          </Row>
          <Row>
            <Col><hr /></Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <CardImg top width="100%" src={rocket} alt="Rocket" />
                <CardBlock>
                  <CardTitle>First Blog</CardTitle>
                  <CardSubtitle>Let&apos;s go!</CardSubtitle>
                  <CardText>I&apos;ve been sitting on mikevillis.com for almost 12 months now. At the time of...</CardText>
                  <Button href='https://medium.com/bikebytes/launch-55583c4df741'>Read More</Button>
                </CardBlock>
              </Card>
            </Col>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}></Col>
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
