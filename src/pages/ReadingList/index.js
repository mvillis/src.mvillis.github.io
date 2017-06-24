import React from 'react'
import { Card, CardText, CardBlock, CardDeck, CardHeader,
  CardTitle, Container, Row, Col } from 'reactstrap';
import './styles.css';

const ReadingList = (props) => {
  return (
    <Container>
      <Row>
        <Col><h3 className="title">Reading List</h3></Col>
      </Row>
      <Row>
          <CardDeck>
            <Card outline color="success">
              <CardHeader>Architecture</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.slideshare.net/thekua/the-well-rounded-architect-76127395">The Well Rounded Architect</a></CardTitle>
                <CardText>The breakdown of the elements of a good architect really resonates with me.</CardText>
              </CardBlock>
            </Card>
            <Card outline color="success">
              <CardHeader>Architecture</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://martinfowler.com/articles/architect-elevator.html">The Architect Elevator — Visiting the upper floors</a></CardTitle>
                <CardText>Great analogy. Really feel like this descibes architecture in a large organisation.</CardText>
              </CardBlock>
            </Card>
            <Card outline color="secondary">
              <CardHeader>Leadership</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.inc.com/justin-bariso/elon-musk-sent-an-extraordinary-email-to-employees-and-taught-a-major-lesson-in.html">This Email From Elon Musk to Tesla Employees Is a Master Class in Emotional Intelligence</a></CardTitle>
                <CardText>Lead by example...in moments when it really matters. Elon Musk - what a superstar.</CardText>
              </CardBlock>
            </Card>
            <Card outline color="secondary">
              <CardHeader>Leadership</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.inc.com/peter-economy/7-secrets-of-servant-leadership-that-will-lead-you-to-success.html">7 Secrets of 'Servant Leadership' That Will Lead You to Success</a></CardTitle>
                <CardText>These qualities I highly record in my leaders and in my career as a leader do my best to adhere to.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
    </Container>
  )
}

export default ReadingList
