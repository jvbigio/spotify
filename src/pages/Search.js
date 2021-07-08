import React, { useState } from 'react'
import './Search.css'
import { Form, InputGroup, DropdownButton, Dropdown, Image } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import musicNotes from '../images/music-notes.png'

import authToken from '../controllers/token-service'
import axios from 'axios'

authToken.getAuthToken()

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [dropDownValue, setDropdownValue] = useState('')

  const getUserInput = e => setSearchInput(e.target.value)

  const handleClick = e => setDropdownValue(e.target.textContent)

  const handleSearch = async (e) => {
    e.preventDefault()

    // TODO:
    // create option to search by artist, album, or song
    // const artistUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=artist`
    // const albumUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=album`
    // const songUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=playlist`

    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=10`)
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
              <DropdownButton
                as={InputGroup.Append}
                // variant='outline-secondary'
                // variant='primary'
                variant='info'
                // title='Options'
                title={dropDownValue}
                // value={dropDownValue}
                id='input-group-dropdown'
              >
                <Dropdown.Item onClick={(e) => handleClick(e)} href='#'>Artist</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleClick(e)} href='#'>Album</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleClick(e)} href='#'>Song</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
      <Image src={musicNotes} className='musicImage' fluid />
      {/* <main className='content'>
      </main> */}
    </div>
  )
}

export default Search