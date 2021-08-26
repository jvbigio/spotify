import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

import { Navbar, Nav } from 'react-bootstrap'
import { FaMusic } from 'react-icons/fa'

const Navigation = () => {
  return (
    <Navbar className='d-flex justify-content-around' bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand href='/'><FaMusic /></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='/search' activeClassName='active'>Search</NavLink>
          <NavLink to='/random' activeClassName='active'>Random</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
