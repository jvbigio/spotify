import React from 'react'
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
import './Sidebar.css'

const Sidebar = () => {
  return (
    // orig
    // <div
    //   style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    // >
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
            <FaSpotify className='spotify-logo' />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default Sidebar
