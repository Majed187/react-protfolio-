import React from "react";
import { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

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
  reset = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Navbar dark className="bg-dark my-nav fixed-top" expand="md">
        <div className="container">
          <NavbarBrand className="text-light logo">Sh_Rendan</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            onClick={this.reset}
            className="Collaps "
            navbar
          >
            <Nav className="ml-auto h2 " navbar>
              <NavItem>
                <NavLink href="/#Home" activeClassName="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#About" activeClassName="active">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#Projects" activeClassName="active">
                  Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#Contact" activeClassName="active">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
export default Header;
