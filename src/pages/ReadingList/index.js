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
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>Architecture</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.slideshare.net/thekua/the-well-rounded-architect-76127395">The Well Rounded Architect</a></CardTitle>
                <CardText>Their breakdown of the elements of a good architect really resonates with me. "An effective architect is also a good developer". As a hands-on architect this is music to my ears :-)</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>Architecture</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://martinfowler.com/articles/architect-elevator.html">The Architect Elevator — Visiting the upper floors</a></CardTitle>
                <CardText>The primary role of an architect is to ride the elevators between the penthouse and engine room, stopping wherever is needed...</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="secondary">
              <CardHeader>Leadership</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.inc.com/justin-bariso/elon-musk-sent-an-extraordinary-email-to-employees-and-taught-a-major-lesson-in.html">This Email From Elon Musk to Tesla Employees Is a Master Class in Emotional Intelligence</a></CardTitle>
                <CardText>Lead by example...in moments when it really matters. Elon Musk - what a superstar.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="secondary">
              <CardHeader>Leadership</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.inc.com/peter-economy/7-secrets-of-servant-leadership-that-will-lead-you-to-success.html">7 Secrets of 'Servant Leadership' That Will Lead You to Success</a></CardTitle>
                <CardText>Servant leaders believe that...1. Every person has value and deserves civility, trust, and respect 2. People can accomplish much when inspired by a purpose beyond themselves</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="primary">
              <CardHeader>Fascinating</CardHeader>
              <CardBlock>
                <CardTitle><a href="http://webaim.org/blog/user-agent-string-history/">History of the browser user-agent string</a></CardTitle>
                <CardText>If you&apos;ve ever wondered why user agent headers never seem to match your browser, this one is for you!</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Tools</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://codesandbox.io/#examples">Code SandBox</a></CardTitle>
                <CardText>Really nice way to share react projects including some good examples.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="warning">
              <CardHeader>Career</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://charity.wtf/2017/05/11/the-engineer-manager-pendulum/">The Engineer / Manager Pendulum</a></CardTitle>
                <CardText>Language Warning (!) As someone who feels as comfortable deep in code as leading a team, career planning is tricky. Appreciate Charity&apos;s advice on this one.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="danger">
              <CardHeader>Javascript</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://medium.freecodecamp.com/understanding-node-js-event-driven-architecture-223292fcbc2d">Understanding Node.js Event-Driven Architecture</a></CardTitle>
                <CardText>I&apos;ve been on a long javascript learning journey. Understanding more about asynchronous processing is a useful talent.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>UX</CardHeader>
              <CardBlock>
                <CardTitle><a href="UX - https://airbnb.design/painting-with-code/">AirBnB - Painting with Code</a></CardTitle>
                <CardText>For anyone who has tried to optimise UX to developer handover. AirBnB has prioneered a truly innovative approach.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Cloud</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://cloudserviceevaluation.com/2017/02/02/lambda-or-ec2-which-one-do-you-use-to-save-the-most-money/">Lambda or EC2? How to Use Them to Save the Most Money.</a></CardTitle>
                <CardText>It makes sense that at some point it becomes more economical to run up a server. This article explains the economics.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="danger">
              <CardHeader>Javascript</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">A cartoon intro to Redux</a></CardTitle>
                <CardText>Redux is amazing but not easy to get your head around. Lin Green has a novel approach to explaining it. Check out all of her cartoons!</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Cloud</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://bitbucket.org/atlassian/localstack/overview">LocalStack - A fully functional local AWS cloud stack</a></CardTitle>
                <CardText>Atlassian has gifted something magical to the world. Makes testing your automation so much faster.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>UX</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://airbnb.design/painting-with-code/">AirBnB - Painting with Code</a></CardTitle>
                <CardText>For anyone who has tried to optimise the UX / code </CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Cloud</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://cloudserviceevaluation.com/2017/02/02/lambda-or-ec2-which-one-do-you-use-to-save-the-most-money/">Lambda or EC2? How to Use Them to Save the Most Money.</a></CardTitle>
                <CardText>It makes sense that at some point it becomes more economical to run up a server. This article explains the economics.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="danger">
              <CardHeader>Javascript</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">A cartoon intro to Redux</a></CardTitle>
                <CardText>Redux is amazing but not easy to get your head around. Lin Green has a novel approach to explaining it. Check out all of her cartoons!</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Cloud</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://bitbucket.org/atlassian/localstack/overview">LocalStack - A fully functional local AWS cloud stack</a></CardTitle>
                <CardText>Atlassian has gifted something magical to the world. Makes testing your automation so much faster.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Cloud</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://read.acloud.guru/evolution-of-business-logic-from-monoliths-through-microservices-to-functions-ff464b95a44d">Evolution of Business Logic from Monoliths through Microservices, to Functions</a></CardTitle>
                <CardText>Big Fan of Adrian Cockcroft. Well articulated summary of the hosting landscape.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="warning">
              <CardHeader>Career</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.fastcompany.com/3067743/career-evolution/how-to-create-your-own-opportunities-at-work">How to create your own career opportunities at work?</a></CardTitle>
                <CardText>Don&apos;t wait for permission to do more. Good advice. Lots of great tips that resonate with me.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Cloud</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://medium.com/capital-one-developers/serverless-is-the-paas-i-always-wanted-9e9c7d925539">Serverless is the PaaS I always wanted</a></CardTitle>
                <CardText>I am a bit of a serverless fan boy. For many reasons highlighted in this article!</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="secondary">
              <CardHeader>Agile</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://age-of-product.com/agile-metrics-good-bad-ugly/">Agile Metrics — The Good, the Bad, and the Ugly</a></CardTitle>
                <CardText>Agile kinda means everything and nothing these days. This article on picking metrics really helps focus and understand what you&apos;re trying to achieve.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="danger">
              <CardHeader>Javascript</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">How it feels to learn javascript in 2016</a></CardTitle>
                <CardText>I have been progressively learning Javascript over the past couple years (leaving a lot of Java and Python behind). Funny yet totally accurate depiction of the rate of change happening in the community.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>UX</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://unsplash.com">Unsplash</a></CardTitle>
                <CardText>Free (do whatever you want) high-resolution photos. What else do I need to say?</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Tools</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://github.com/minimaxir/big-list-of-naughty-strings">The Big List of Naughty Strings</a></CardTitle>
                <CardText>Want to break a website? Try using some of these strings in their forms. Such a handy reference.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>DevOps</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://landing.google.com/sre/book/index.html">Google - Site Reliability Engineering Book</a></CardTitle>
                <CardText>Google published for free their book on SRE. Worth checking out even if you&apos;re not operating at Google scale!</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>Tools</CardHeader>
              <CardBlock>
                <CardTitle><a href="http://www.east5th.co/blog/2017/02/13/build-your-own-code-poster-with-elixir/">Build Your Own Code Poster With Elixir</a></CardTitle>
                <CardText>Awesome idea. Waiting for the opportunity to try it myself. Would be a nice memento for any team!</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>DevOps</CardHeader>
              <CardBlock>
                <CardTitle><a href="http://bitcubby.com/continuous-integration-delivery-illustrated/">Continuous Integration & Delivery - Illustrated</a></CardTitle>
                <CardText>Pictures worth a thousand words. Helps anyone get their head around CD.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>DevOps</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://github.com/git-game/git-game">The Git Game</a></CardTitle>
                <CardText>Have fun and learn how to be amazing at GIT? This is the game or you :-)</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>Architecture</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://martinfowler.com/articles/ea-in-lean-enterprise.html">The Role of an Enterprise Architect in a Lean Enterprise</a></CardTitle>
                <CardText>Getting your head around how architecture fits in a Lean / Agile world.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="primary">
              <CardHeader>Fascinating</CardHeader>
              <CardBlock>
                <CardTitle><a href="http://ukupat.github.io/tabs-or-spaces/">Tabs or Spaces</a></CardTitle>
                <CardText>For the record, I&apos;m a spaces kind of guy. Are you? What about everyone else?</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>DevOps</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://productcoalition.com/start-here-statistics-for-a-b-testing-5f5c7e02ce1e">Start here: Statistics for A/B testing</a></CardTitle>
                <CardText>Didn&apos;t pay attention to Stats at UNI and now A/B testing is all the rage? This is the article for you!</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="secondary">
              <CardHeader>Leadership</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://medium.com/@kimber_lockhart/don-t-create-a-sense-of-urgency-foster-a-sense-of-purpose-724e309ecdb0">Don’t create a sense of urgency, foster a sense of purpose</a></CardTitle>
                <CardText>I&apos;m not a patient kind of guy. This article I go back to everyone now and again to remember that purpose, not urgency is the goal.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="info">
              <CardHeader>DevOps</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.paypal-engineering.com/2016/04/11/statistics-for-software/">Statistics For Software</a></CardTitle>
                <CardText>Taking operational statistics to the next level. No longer will you ever think a mere average is enough!</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="danger">
              <CardHeader>Women In Tech</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://medium.com/tech-diversity-files/if-you-think-women-in-tech-is-just-a-pipeline-problem-you-haven-t-been-paying-attention-cb7a2073b996#.v1ogm9vkv">If you think women in tech is just a pipeline problem, you haven’t been paying attention</a></CardTitle>
                <CardText>Well articulated, researched and thought provoking article. We all play a role in addressing our diversity challenges in Tech.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>APIs</CardHeader>
              <CardBlock>
                <CardTitle><a href="http://nordicapis.com/api-security-oauth-openid-connect-depth">API Security: Deep Dive into OAuth and OpenID Connect</a></CardTitle>
                <CardText>If you're building APIs for your next mobile App or single page website, this is a must read article. In general, I find that Nordic APIs does a great job on doco.</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="success">
              <CardHeader>APIs</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://www.pandastrike.com/posts/20160814-version-media-types-not-urls">Version Media Types, Not URLs</a></CardTitle>
                <CardText>API versioning is a heated topic in all Dev circles. In my discussions, I vote for this guy!</CardText>
              </CardBlock>
            </Card>
            <Card className="card-deck-custom" outline color="warning">
              <CardHeader>Security</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://martinfowler.com/articles/web-security-basics.html">The Basics of Web Application Security</a></CardTitle>
                <CardText>For beginners, a good overall intro to web app security. For pros - lots of good reminders.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
      <Row>
          <CardDeck>
            <Card className="card-deck-custom" outline color="warning">
              <CardHeader>Security</CardHeader>
              <CardBlock>
                <CardTitle><a href="https://highon.coffee/blog/penetration-testing-tools-cheat-sheet">Penetration Testing Tools Cheat Sheet</a></CardTitle>
                <CardText>Pen Testing is not the dark art of crackers trying to bypass your security. It does take a lot of smart but there&apos; also lots of tools and tricks you can try out yourself.</CardText>
              </CardBlock>
            </Card>
          </CardDeck>
      </Row>
    </Container>
  )
}

export default ReadingList
