import React, { useState } from 'react'
import './Search.css'
import { Form, InputGroup, Image } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import imageBG from '../images/music-chord-bg.jpg'

import authToken from '../controllers/token-service'
import axios from 'axios'

authToken.getAuthToken()

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getUserInput = e => setSearchInput(e.target.value)

  const handleSearch = async (e) => {
    e.preventDefault()

    // const artistUrl = `https://api.spotify.com/v1/search?query=${searchInput}&type=artist`
    // const albumUrl = `https://api.spotify.com/v1/search?query=${searchInput}&type=album`

    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?query=${searchInput}&type=artist`)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
    setSearchInput('')
  }

  return (
    <div className='search-container'>
      <div className='search-form'>
        <Form onSubmit={handleSearch} className='input-search justify-content-center w-50' autoComplete='off'>
          <Form.Group controlId='form-search' autoComplete='off'>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id='form-icon'><BsSearch /></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type='text'
                placeholder='Artist, album, or song'
                value={searchInput}
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
