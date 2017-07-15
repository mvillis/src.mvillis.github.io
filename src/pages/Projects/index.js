import React from 'react'
import { Row, Col, Badge, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './styles.css';

const Projects = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo-over-projects">
        <Container fluid>
          <Container>
            <h1>Projects</h1>
          </Container>
        </Container>
      </Jumbotron>
      <Container>
        <h5 className='card-custom'>A mixed bag of side projects. Mostly driven by the desire to learn something new while also doing something useful :-)</h5>
        <Row>
          <Col>
            <Card className='card-custom'>
              <CardBlock>
                <CardTitle><a href="https://www.tradepad.com.au" target="_blank">tradepad</a></CardTitle>
                <CardSubtitle>A startup focused on disrupting the real estate industry.</CardSubtitle>
                <CardText><Badge>react</Badge> <Badge>aws</Badge> <Badge>serverless</Badge></CardText>
              </CardBlock>
            </Card>
            <Card className='card-custom'>
              <CardBlock>
                <CardTitle><a href="https://github.com/mvillis/measure-mate" target="_blank">Measure Mate</a></CardTitle>
                <CardSubtitle>My first react app. Kicked this one off to help provide a flexible platform to track and manage team maturity assessments. Using Excel is great but I think we can do better.</CardSubtitle>
                <CardText><Badge>react</Badge> <Badge>django</Badge></CardText>
              </CardBlock>
            </Card>
            <Card className='card-custom'>
              <CardBlock>
                <CardTitle><a href="https://github.com/teamtemp/teamtemp" target="_blank">Team Temp</a></CardTitle>
                <CardSubtitle>How much can you say with 1 word and a number? Well not a lot but that&apos;s not the point. It&apos;s all about making it ok to talk about how you feel in the office!</CardSubtitle>
                <CardText><Badge>python</Badge> <Badge>django</Badge></CardText>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
