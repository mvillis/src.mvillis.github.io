import React from 'react'
import { Collapse, Container, Navbar,
  NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './styles.css'

const Header = (props) => {
  return (
    <Container>
      <Navbar toggleable>
        <NavbarToggler right />
        <NavbarBrand href="/">mikevillis</NavbarBrand>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://blog.mikevillis.com">Blog</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  )
}

export default Header
