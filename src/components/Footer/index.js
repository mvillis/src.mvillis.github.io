import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './styles.css'

const Footer = (props) => {
  return (
    <Container className="footer">
        <Row>
          <Col sm={8} xs={12} className="buffer-left">
            <p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a></p>
          </Col>
          <Col sm={4} xs={12} className="buffer-right">
            <a href='https://twitter.com/mvillis' role='button' title='Twitter'>
              <svg width='36' height='36' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
                <path d='M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258
                  146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5
                  61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88
                  44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236
                  102 109-21 205-78-37 115-142 178 93-10 186-50z' />
              </svg>
            </a>
            <a href='https://www.github.com/mvillis' role='button' title='Facebook'>
              <svg width='36' height='36' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385
                  0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824
                  1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953
                  0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266
                  2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82
                  1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19
                  0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" />
              </svg>
            </a>
          </Col>
        </Row>
    </Container>
  )
}

export default Footer
