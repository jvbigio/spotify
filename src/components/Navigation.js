import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaMusic } from 'react-icons/fa'

const Navigation = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand href='/'><FaMusic /></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/search'>Search</Nav.Link>
          <Nav.Link href='/random'>Random</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
