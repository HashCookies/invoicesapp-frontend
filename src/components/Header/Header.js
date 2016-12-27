import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import { Navbar , Nav , NavItem } from 'react-bootstrap'
import { IndexLinkContainer , LinkContainer } from 'react-router-bootstrap'
import Logo from 'assets/images/hash-invoices-logo.png'


export const Header = () => (
  <div className="header-nav">
    <Navbar>
      <Navbar.Header>
        <Navbar.Toggle />

        <Navbar.Brand>
           <IndexLink to='/' >
             <img alt="Brand" src={Logo} />
           </IndexLink>
        </Navbar.Brand>

      </Navbar.Header>

      <Navbar.Collapse>
         <Nav bsStyle="pills" pullRight >
            <LinkContainer to='/contactus' >
              <NavItem eventKey={1} > Contact Us </NavItem>
              </LinkContainer>
            <LinkContainer to='/aboutus' >
              <NavItem eventKey={2} >About Us</NavItem>
            </LinkContainer>
            <LinkContainer to='/login' >
              <NavItem eventKey={3} > Login </NavItem>
            </LinkContainer>
         </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
