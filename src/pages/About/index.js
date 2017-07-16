import React from 'react'
import { Row, Col, Badge, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './styles.css';

const About = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo-over-about">
        <Container>
          <h1>About</h1>
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
                <CardText>
                  <Badge>TOGAF</Badge>
                  <p>Tech Services offers Business Process and Digital Enablement and DevOps capabilities to Suncorp.
                    As Principal Architect for the department, my responsibility was to ensure the strategic fit and suitability of
                    the services to our business goals and needs of the technical delivery teams.</p>
                  <p>
                    Key focus areas have been the API and Identity Strategy in line with our ongoing digital transformation. This involved:
                    <ul>
                      <li>developing a capability framework and measurement approach</li>
                      <li>automating key integration patterns across our shared platforms </li>
                      <li>collaborating with technical leaders on standards and governance</li>
                      <li>creating roadmap aligned with business projects / priorties</li>
                      <li>facilitating cross domain chapters to collaborate with engineers and other tech leaders.</li>
                    </ul>
                  </p>
                  <p>
                    Other areas included the development of Roadmaps, Customer and Project Solution design, Product Advocacy as well as mentoring and developing the architects and tech leads in the department.
                  </p>
                  <p>
                    Complete list of areas include:
                    <ul>
                      <li>Identity, Access & APIs (Axway API Manager, Microsoft AD including Azure AD, Oracle Identity Suite)</li>
                      <li>Dev Tools (Atlassian Suite - JIRA, Confluence, Bitbucket, Jenkins, Ansible, Nexus, Sonar, Fortify)</li>
                      <li>App Integration (IBM MQ/Message Broker, Mulesoft, Pentaho)</li>
                      <li>Content Capture and Communication (in house Java / AWS solution, Scriptura, Kofax)</li>
                      <li>Workflow / BPM (Service Now, IBM Filenet, IBM Case Manager)</li>
                    </ul>
                  </p>
                </CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Architect - BT Services - Suncorp</CardTitle>
                <CardSubtitle>Nov 2015 - June 2016</CardSubtitle>
                <CardText>
                  <p>
                    The promotion to the Architect for the BT Services department was recognition of the work I've done with App Dev Tools and its stakeholders with a desire to apply that same recipe to other delivery capabilities. Key growth areas were Identity, APIs as weak as the monitoring and analytics platforms.
                  </p>
                  <p>
                    A key achievement during this tenure was taking on the lead of the API Tribe within the group. A cross-domain collaboration focused around API capability uplift - setting standards, agreeing on roadmap priorities and best practice. As part of this I defined and initiated an uplift to deliver self-service to delivery teams around key strategic API patterns (make easy = right!). This involved investing in careful multi-tenancy design on our Axway platform focusing on security and ease of use by delivery teams. Extracting out key gateway logic into a tested, automated pipeline enabled low risk, fast delivery. This combined with modern security patterns around OAUTH enabled the uplift.
                  </p>
                  <p>
                    Together with areas of focus like APIs, this role included continued work to progress our migration to the cloud and well as driving further self-service, best practices and lots of product advocacy with customers and their projects.
                  </p>
                  <p>
                    Services / Tools included in the portfolio:
                    <ul>
                      <li>Identity, Access & APIs (Microsoft AD, Oracle Identity Suite, Axway)</li>
                      <li>Application Health (Splunk, Dynatrace, Firescope)</li>
                      <li>Dev Tools (Atlassian Suite - JIRA, Confluence, Bitbucket, Jenkins, Ansible, Sonar, Nexus)</li>
                      <li>App Integration (IBM MQ/Message Broker, Mulesoft)</li>
                      <li>Cloud Reliability (In house ruby based tools to assist with Cloud Operations and Migration)</li>
                    </ul>
                  </p>
                </CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Architect - Application Development Tools - Suncorp</CardTitle>
                <CardSubtitle>Nov 2013 - Nov 2015</CardSubtitle>
                <CardText>
                  <p>
                    I joined App Dev Tools at an exciting time as Suncorp was commencing its Cloud journey to AWS. My goal as the Architect was to learn and understand what this meant for our service offering as well as champion cloud best practices and DevOps across the group.
                  </p>
                  <p>
                    This was definitely a case of listen, learn and adapt and as part of this role I initiated a DevOps Guild across the group - bringing together like minded and key technical folk together. I drove the creation of our Maturity matrix and people capability framework while working with dev teams to understand how our Dev Tools would drive the automation and measurement goals needed. Looking back, the secret to success was successfully sharing capability, embracing divergent problem solving while still converging on a consistent landscape.
                  </p>
                  <p>
                    Key capability areas of focus were config mgmt, continuous integration and deployment, building quality in, security and automation. As shared service providers we tackled this often cultural as much as technical change using the mantra of "Make easy equal right"; delivering capability that was as easy as AWS itself but opinionated towards the best practices we were promoting.
                  </p>
                  <p>
                    While my role was an an architect , this was so much a hands on role - getting in, hands dirty, solving tricky problems with lots of smart and talented people!
                  </p>
                  <p>
                    Primary responsibilities included:
                    <ul>
                      <li>Product Ownership across enterprise Dev Tools (Atlassian Suite - JIRA, Confluence, Bitbucket, Jenkins, Ansible, Nexus, Sonar, Fortify)</li>
                      <li>Cloud Migration Strategy (AWS) including use of EC2, EBS, ELBs, Cloudwatch on custom Java and COTS applications</li>
                      <li>Design and Implementation of Continuous Delivery Pipelines for group assets.</li>
                    </ul>
                  </p>
                </CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Architect (Secondment)- Applied Research - Suncorp</CardTitle>
                <CardSubtitle>Jun 2013 - Nov 2013</CardSubtitle>
                <CardText>
                  <p>
                    Keen to develop my technical leadership and breadth I joined the Suncorp Applied research team. Key to this role was careful definition of the business opportunity and balancing business and technical risk to make recommendations on upcoming investments.
                  </p>
                  <p>
                    This was hands on involving owning end to end idea to delivery.
                  </p>
                  <p>
                    During the 6 months I designed a strategic intelligence solution including the implementation of an Apache SOLR backed Internet/Social media Indexing / clustering engine to accelerate market analysis and tracking.
                  </p>
                  <p>
                    My focus moved towards the upcoming AWS Cloud migration including the design and introduction of foundation capabilities (account structure and permission in a large enterprise as well as a billing / show-back engine (based on Netflix OSS).
                  </p>
                </CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Tech Lead - Workflow & Content Solutions - Suncorp</CardTitle>
                <CardSubtitle>Jul 2011 - Jun 2013</CardSubtitle>
                <CardText>
                  <p>
                    Taking the role of Tech Lead role was recognition of my thought leadership and ability to deliver great engineering in an Agile, collaborative environment.
                  </p>
                  <p>
                    As Tech Lead I was responsible for the technical implementation of a combined workflow/content solution aim at delivering a 100% paperless operation for the lending operations of the Bank. This required developing a solution that matched capability provided by commercial products including IBM FileNet & Kofax with a Drools (Business Rules) engine and a series of Java/Spring Web Services. As Tech Lead my key responsibilities were to establish development standards and engineer funamentals across the team and align delivery to functional and non-functional outcomes. Establishing a declarative business rules shared service for the group covering how they are authored, tested, integrated and deployed was a key highlight.
                  </p>
                  <p>
                    I also lead the implementation of a Policy Workflow solution. Delivery involved the analysis, design and implementation of an IBM Case Manager solution. This was supported by a series of Java APIs and Javascript UI widgets covering User Mgmt, Scheduling and Work Allocation, Quality Assurance and Auditing. Key to this delivery was establishing high levels of automation in the way we tested and deployed to achieve regular, reliable delivery to production. Behaviour Driven Development via JBehave was applied to both our Java and Case Manager assets. Deployments Pipelines via Jenkins supported these deliverables.
                  </p>
                  <p>
                    Key Responsibilities:
                    <ul>
                      <li>Technical Solution Design in collaboration with domain architects and business</li>
                      <li>Advocate and implement quality engineering practices (version control, CI/CD) on friendly (Java) application and unfriendly vendor applications</li>
                      <li>Hands on Development (Java, Spring CXF REST Web Services, Drools Rule Integration, Javascript Widget Development)</li>
                      <li>Shared Service Design and Implementation</li>
                    </ul>
                  </p>
                </CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>System Analyst - Easysuite (Doc Generation & Content Mgmt) - Suncorp</CardTitle>
                <CardSubtitle>Feb 2010 - Jun 2011</CardSubtitle>
                <CardText>
                  <p>
                    Moving into the System Analyst role provided the opportunity to build on my subject matter expertise in Content Management and Customer Communication. This was combined with the responsibility of running a successful service operations unit for enterprise shared services. The role was a split between operating within a service operations squad to ensure the ongoing running of these critical assets and consulting with customers on their use of the shared services.
                  </p>
                  <p>
                    Key Responsibilities included:
                    <ul>
                      <li>Platform health including break/fix, pro-active maintenance and capacity planning and reporting</li>
                      <li>Service Operations design (scaling operations in an area of strong growth)</li>
                      <li>New customer consultation, integration analysis and onboarding support</li>
                    </ul>
                  </p>
                  <p>
                    Skills:
                    <ul>
                      <li>Embracing Agile in an Operations environment</li>
                      <li>JIRA project design and optimisation</li>
                      <li>API Integration - primarily SOAP / XML</li>
                      <li>Scriptura & XSLT/Path</li>
                      <li>SQL</li>
                      <li>Groovy / Java</li>
                      <li>Customer Communication Design and templating</li>
                      <li>Unstructured Data lifecycle management and meta-data definition</li>
                    </ul>
                  </p>
                </CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Graduate (IT Officer) - Suncorp</CardTitle>
                <CardSubtitle>Feb 2008 - Feb 2010</CardSubtitle>
                <CardText>
                  <p>
                    Joined the Suncorp Graduate Program after finishing university.
                  </p>
                  <p>
                    During my time rotated through a series of areas throughout Suncorp:
                    <ul>
                      <li>Shared Services (Enterprise Solutions)</li>
                      <li>Group Architecture</li>
                      <li>EasySuite (Content & Communication Solutions)</li>
                    </ul>
                  </p>
                </CardText>
              </CardBlock>
            </Card>
            <Card>
              <CardBlock>
                <CardTitle>Manager - McDonald&apos;s</CardTitle>
                <CardSubtitle>Mar 2001 - Feb 2008</CardSubtitle>
                <CardText>
                  <p>
                    My first official job (helping my brother on the family farm was more of an act of charity than employment!)
                  </p>
                  <p>
                    Over my tenure at McDonalds I ascended through the ranks from Crew person to Shift Manager through my years at high school then university.
                  </p>
                  <p>
                    McDonald's taught me a lot about people and running a business. If I can convince a temperamental 15 year old to go and clean the rest rooms or turn an unhappy customer experience into something positive, I figure I can face any people challenges that I may face in my future career :-)
                  </p>
                  <p>
                    I look back very favourably on my years at McDonalds. Nothing says teamwork like feeding 2 unexpected bus loads of people at 1am. This ability to smile and be collectively amazing through adversity is something that remains with me and I'm so thankful for.
                  </p>
                </CardText>
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
            <ul>
              <li>Great Engineering Basics</li>
              <li>Subscribe to the Agile Architect philosophy</li>
              <li>tba</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
