import React, { useState } from 'react'
import './Search.css'
import { Form, InputGroup, Image } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import imageBG from '../images/music-chord-bg.jpg'

import authToken from '../controllers/token-service'

authToken.getAuthToken()

const Search = () => {
  // debugger
  const [search, setSearch] = useState('')

  const getUserInput = e => setSearch(e.target.value)

  const handleSearch = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='search-container'>
      <div className='search-form'>
        <Form onSubmit={handleSearch} className='input-search justify-content-center w-50'>
          <Form.Group controlId='form-search' autoComplete='off'>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id='form-icon'><BsSearch /></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type='text'
                placeholder='Artist, album, or song'
                onChange={(e) => getUserInput(e)}
              />
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
      {/* <main className='content'>
      </main> */}
    </div>
  )
}

export default Search
