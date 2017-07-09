import React from 'react'
import { Card, CardImg, CardText, CardBlock, CardDeck,
  CardTitle, CardSubtitle, Container, Jumbotron, Row, Col } from 'reactstrap';
import { Timeline } from 'react-twitter-widgets'
import './Home.css';
import rocket from './img/spacex-71873.jpg';
import siteFlow from './img/site_flow.jpg';
import readList from './img/matthew-guay-148463.jpg';

const Home = (props) => {
  return (
    <div className="App">
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
                <CardImg top width="100%" src={readList} alt="Reading List" />
                <CardBlock>
                  <CardTitle><a href='https://blog.mikevillis.com/curiosity-is-king-and-the-launch-of-my-reading-list-229777ffaeac'>Blog: Curiosity is king! And the launch of my reading list</a></CardTitle>
                  <CardSubtitle>Being curious about the world involves lots of reading.</CardSubtitle>
                  <CardText>There are roughly 40 articles there covering DevOps, Leadership, Career, Architecture as well as...</CardText>
                </CardBlock>
              </Card>
              <Card>
                <CardImg top width="100%" src={siteFlow} alt="Pipeline for Github Pages" />
                <CardBlock>
                  <CardTitle><a href='https://blog.mikevillis.com/simple-react-site-with-create-react-app-github-pages-travis-ci-and-cloudflare-8a859daa881'>Blog: Simple React Site with create-react-app, Github pages, Travis CI and CloudFlare</a></CardTitle>
                  <CardSubtitle>The foundations of mikevillis.com</CardSubtitle>
                  <CardText>There’s no shortage of tools and frameworks out there to help you build...</CardText>
                </CardBlock>
              </Card>
              <Card>
                <CardImg top width="100%" src={rocket} alt="Rocket" />
                <CardBlock>
                  <CardTitle><a href='https://blog.mikevillis.com/launch-55583c4df741'>First Blog</a></CardTitle>
                  <CardSubtitle>Let&apos;s go!</CardSubtitle>
                  <CardText>I&apos;ve been sitting on mikevillis.com for almost 12 months now. At the time of...</CardText>
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

export default Home
