import React from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, Container, Navbar,
  NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './styles.css';

const Header = (props) => {
  return (
    <Container>
      <Navbar toggleable>
        <NavbarToggler right />
        <NavbarBrand>
          <NavLink exact to='/'>
            mikevillis.com
          </NavLink>
        </NavbarBrand>
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to='/reading'>
                Reading List
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a className="nav-link" href="https://blog.mikevillis.com">Blog</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  )
}

export default Header
