import React from 'react'
import { Row, Col, Badge, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './styles.css';

const About = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo-over-about">
        <Container fluid>
          <h1>Mike Villis</h1>
          <p className="lead">Technology Enthusiast</p>
        </Container>
      </Jumbotron>
      <Container>
        <h3>Experienced Architect with a demonstrated history of working in the financial services industry. Strong engineering professional skilled in Business Process Design, DevOps, Digital API & Identity Integration, IT Strategy, Java and Front End technologies.</h3>
        <Row>
          <Col>
            <h1>Experience</h1>
            <Card>
              <CardBlock>
                <CardTitle>Principal Architect - Technology Services - Suncorp</CardTitle>
                <CardSubtitle>June 2016 - Present</CardSubtitle>
                <CardText><Badge>TOGAF</Badge>Lots of good things.</CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Architect - BT Services - Suncorp</CardTitle>
                <CardSubtitle>Nov 2015 - June 2016</CardSubtitle>
                <CardText>Lots of good things.</CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Architect - Application Development Tools - Suncorp</CardTitle>
                <CardSubtitle>Nov 2013 - Nov 2015</CardSubtitle>
                <CardText>Lots of good things.</CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Architect (Secondment)- Applied Research - Suncorp</CardTitle>
                <CardSubtitle>Jun 2013 - Nov 2013</CardSubtitle>
                <CardText>Lots of good things.</CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Tech Lead - Workflow & Content Solutions - Suncorp</CardTitle>
                <CardSubtitle>Jul 2011 - Jun 2013</CardSubtitle>
                <CardText>Lots of good things.</CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>System Analyst - Easysuite (Doc Generation & Content Mgmt) - Suncorp</CardTitle>
                <CardSubtitle>Feb 2010 - Jun 2011</CardSubtitle>
                <CardText>Lots of good things.</CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Graduate (IT Officer) - Suncorp</CardTitle>
                <CardSubtitle>Feb 2008 - Feb 2010</CardSubtitle>
                <CardText>Lots of good things.</CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Manager - McDonald&apos;s</CardTitle>
                <CardSubtitle>Mar 2001 - Feb 2008</CardSubtitle>
                <CardText>Lots of good things.</CardText>
              </CardBlock>
            </Card>
          </Col>
          <Col>
            <h1>Skills</h1>
            <ul>
              <li><h4>Technical</h4><p>Will engineers trust you to help improve what they build and how? For example, can you architect across the stack and advocate best practices for code quality? Do you like leading from behind? As a startup, can you pitch in as needed?</p></li>
              <li><h4>Project Management</h4><p>Will you make development more predictable and productive? For example, as a feature moves from product design to implementation to production, will you help engineers technically spec, scope, decompose, tackle, & maintain features? Can you help with roadblocks, such as identifying risky parts, and making sure collaborations happen?</p></li>
              <li><h4>Business Bridge</h4><p>Will you improve how product designers, sales engineers, and even early customers work with engineers, and vice-versa? Will you make sure infrastructure & operations are represented in engineering discussions?</p></li>
              <li><h4>Domain Understanding</h4><p>For engineers who lack experience with aspects of enterprise software and our customers&apos; needs (security teams), will you help fill the gap? Will your visibility be a boon to the company?</p></li>
              <li><h4>Engineering Management</h4><p>Will you facilitate hiring? In what ways will you help engineers thrive & grow? Can you help with the ups & downs of rollercoaster startup life? Will you grow the company culture -- improve diversity, the daily environment, ...?</p></li>
              <li><h4>Junior Developers</h4><p>Will you help them integrate & grow?</p></li>
              <li><h4>Outside Face</h4><p>As a leader in a small company, can you assist with random customer-facing tasks like sales engineering and customer success? Recruit? Give tech talks?</p></li>
              <li><h4>Growth</h4><p>As we go through the next doublings, how will you grow with us?</p></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
