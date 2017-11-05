import React from 'react'
import ReadMore from '../../components/ReadMore';
import { Row, Col, Badge, Container, Jumbotron, Card, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './styles.css';

const About = (props) => {
  return (
    <div>
      <Jumbotron fluid className="jumbo-over-about">
        <Container>
          <h1 className="white-text header-top">About</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h5>Passionate, customer-focused technology professional with a proven record for DevOps and Digital transformation.</h5>
        <h5 className='h5-margin'>Promoter of Agile Delivery via Software-as-a-Service, with success in platforms for API, Identity & Access Management, Dev Tools/DevOps and Cloud Migration Enablement.</h5>
        <Row>
          <Col xs="12" md="8">
            <h1>Experience</h1>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>Enterprise Architect - Suncorp</CardTitle>
                <CardSubtitle>September 2017 - Present</CardSubtitle>
                <CardText>
                  <Badge>leadership</Badge> <Badge>TOGAF</Badge> <Badge>api</Badge> <Badge>digital</Badge> <Badge>identity</Badge>
                  <ReadMore>
                    <p>With significant investments in Identity and APIs as part of the Suncorp Marketplace transformation,
                      my work establishing capabilities in these areas has been elevated to the Enterprise level.
                      This positions sees me leading our domain and digital delivery for our new mobile and web experiences and
                      providing key architectural advice to our business stakeholders.</p>
                    <p>
                      Key initial responsibilities include:
                      <ul>
                        <li>Single Sign On (SSO) patterns across multiple customer identities and digital experiences</li>
                        <li>Mobile authentication and authroisation patterns</li>
                        <li>Identity Assurance capability uplift</li>
                        <li>Entitlements / Fine Grain Authorisation for Domains APIs</li>
                        <li>Data Architecture across customer, digital and identity domains</li>
                        <li>Platform review and standard-based pattern identification (including the use of standards such as Open ID Connect, OAUTH, FIDO and SCIM, OpenAPI, GraphQL)</li>
                        <li>Group API Resource modelling and catalogue elaboration (REST, Swagger, Developer Portal)</li>
                        <li>Group API Governance mechanisms</li>
                      </ul>
                    </p>
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>Principal Architect - Technology Services - Suncorp</CardTitle>
                <CardSubtitle>June 2016 - September 2017</CardSubtitle>
                <CardText>
                  <Badge>leadership</Badge> <Badge>TOGAF</Badge> <Badge>digital</Badge> <Badge>identity</Badge>
                  <ReadMore>
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
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>Architect - BT Services - Suncorp</CardTitle>
                <CardSubtitle>Nov 2015 - June 2016</CardSubtitle>
                <CardText>
                  <Badge>DevOps</Badge> <Badge>API</Badge> <Badge>AWS</Badge>
                  <ReadMore>
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
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>Architect - Application Development Tools - Suncorp</CardTitle>
                <CardSubtitle>Nov 2013 - Nov 2015</CardSubtitle>
                <CardText>
                  <Badge>DevOps</Badge> <Badge>AWS</Badge>
                  <ReadMore>
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
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>Architect (Secondment)- Applied Research - Suncorp</CardTitle>
                <CardSubtitle>Jun 2013 - Nov 2013</CardSubtitle>
                <CardText>
                  <Badge>Machine Learning</Badge> <Badge>design</Badge> <Badge>AWS</Badge>
                  <ReadMore>
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
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>Tech Lead - Workflow & Content Solutions - Suncorp</CardTitle>
                <CardSubtitle>Jul 2011 - Jun 2013</CardSubtitle>
                <CardText>
                  <Badge>Java</Badge> <Badge>Rules</Badge> <Badge>BPM</Badge> <Badge>DevOps</Badge> <Badge>IBM</Badge>
                  <ReadMore>
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
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>System Analyst - Easysuite (Doc Generation & Content Mgmt) - Suncorp</CardTitle>
                <CardSubtitle>Feb 2010 - Jun 2011</CardSubtitle>
                <CardText>
                  <Badge>operations</Badge> <Badge>scale</Badge> <Badge>API</Badge> <Badge>agile</Badge>
                  <ReadMore>
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
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
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
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>Manager - McDonald&apos;s</CardTitle>
                <CardSubtitle>Mar 2001 - Feb 2008</CardSubtitle>
                <CardText>
                  <ReadMore>
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
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <div className="spacer" />
            <h1>Education</h1>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle>University of Southern Qld</CardTitle>
                <CardSubtitle>Bachelor of Information Technology / Bachelor of Business</CardSubtitle>
                <CardText>
                  <ReadMore>
                    <p>Majors in E-Commerce, IT Management & Marketing</p>
                  </ReadMore>
                </CardText>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle><a href="https://www.ealearning.com/our-courses/courses/togaf.html">TOGAF (Level I & II)</a></CardTitle>
                <CardSubtitle>September 2016</CardSubtitle>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle><a href="http://alistair.cockburn.us/Agile+Advanced+Masterclass">Advanced Agile Master Class with Alistair Cockburn</a></CardTitle>
                <CardSubtitle>Feb 2015</CardSubtitle>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle><a href="https://aws.amazon.com/training/course-descriptions/architect/">Architecting on AWS</a></CardTitle>
                <CardSubtitle>September 2013</CardSubtitle>
              </CardBlock>
            </Card>
            <Card className="card-custom-sml">
              <CardBlock>
                <CardTitle><a href="https://www.softed.com/course/agile-design-and-architecture">Agile Architecture and Design</a></CardTitle>
                <CardSubtitle>August 2012</CardSubtitle>
              </CardBlock>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <h1>Skills</h1>
            <ul>
              <li>
                <h4>Customer Focus</h4>
                <p>Connecting with customers, showing true empathy and focusing on aspects beyond technolgy allows me to provide timely, novel and trusted advice in often complex circumstances.
                  Building long term relationships allows me to improve how product designers, sales engineers, and even early customers work with the engineering teams.
                </p>
              </li>
              <li>
                <h4>Technical</h4>
                <p>As a technology generalist I have experience designing and building large scale solutions in <strong>Java</strong>, <strong>Python</strong> and most recently <strong>JavaScript</strong> in my 10 years in the industry. This has been augmented by significant experience on making software delivery more predictable and productive through the introduction of collaboration tools (<strong>Jira, Confluence, Msft Teams</strong>), build and deployment automation (<strong>Jenkins, Ansible, Chef</strong>) and cloud hosting environment (<strong>AWS</strong>).
                  I feel very adept with technology, remain actively <strong>hands on</strong>, can architect across the stack and advocate best practices.
                </p>
              </li>
              <li>
                <h4>Way of Working</h4>
                <p>As an architect (especially in the Finance industry), I am influenced and trained in key frameworks like <strong>TOGAF</strong> and <strong>ITIL</strong> however remain strongly aligned to an Agile way of working. I have worked as part of an Agile architecture team for 5+ years and remain committed to the <a href="http://www.agilearchitect.org/agile/principles.htm">Agile Architect Golden Rules</a>.
                  My style seeks collaboration however will become assertive to drive timely convergence. I have significant experience helping engineers technically spec, scope, decompose, tackle, & maintain features.
                </p>
              </li>
              <li>
                <h4>Domain Understanding</h4>
                <p>
                  I am a generalist however have focused recent efforts on building up a series of domain expertise:
                  <ul>
                    <li><strong>APIs</strong> – Developing enterprise API Strategy including standards, integration patterns, business advocacy and transition planning/roadmaps. Modern security patterns including OAUTH, microservice architectures, REST and GraphQL.</li>
                    <li><strong>Cloud & DevOps</strong> – strategies for running / migration application in the cloud. Implementing 12-Factor applications as well as dealing with non-friendly COTS applications. Leading organisation change to adopting DevOps.</li>
                    <li><strong>Identity & Access</strong> – Develop enterprise identity strategies across Digital, Staff and Assisted channels. This includes integration patterns via SAML and Open ID Connect for web, desktop and mobile applications including 3rd parties.</li>
                    <li><strong>(Emerging) React & Front-End Development </strong>– creation of react based web applications including their integration with back-end services via flux architectures.</li>
                  </ul>
                </p>
              </li>
              <li>
                <h4>Engineering Management</h4>
                <p>
                  Having worked closely with the Executive Manager for a department of over 100 people, creating an environment of highly engaged and enabled engineers was no easy feat.
                  <ul>
                    <li>Attracting, recuiting and keeping talent</li>
                    <li>Mentoring and helping junior staff and find opportunities for the them to grow.</li>
                      <li>Financial Planning / Supply Demand Analysis</li>
                    <li>Advocating engineering excelling outside of the company (AWS Warriors, Brisbane DevOps Meeting)</li>
                    <li>Organising innovation events</li>
                  </ul>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
