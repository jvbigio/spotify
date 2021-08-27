import React from 'react'

import './Sidebar.css'

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact'

import { NavLink } from 'react-router-dom'
import { FaSpotify } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh' }}
    >
      <CDBSidebar textColor='#fff' backgroundColor='black'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large' />}>
          <a
            href='/'
            className='text-decoration-none'
            style={{ color: 'inherit' }}
          >
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='home'>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/search' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='search'>Search</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/random' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='random'>Random</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px'
            }}
          >
            <FaSpotify
              className='spotify-logo'
              onClick={() => window.open('https://open.spotify.com/', '_blank')}
            />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default Sidebar
