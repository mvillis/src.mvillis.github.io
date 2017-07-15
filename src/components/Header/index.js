import React from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse, Container, Navbar,
  NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './styles.css';

export default class Header extends React.Component {
  constructor (props) {
    super (props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <Container>
        <Navbar toggleable light>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand>
            <NavLink exact to='/'>
              mikevillis.com
            </NavLink>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to='/reading'>
                  Reading List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/about'>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/projects'>
                  Projects
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
    );
  }
}

Header.propTypes = {
};
