import React, { useState, useEffect } from 'react'
import './Search.css'
import {
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
  Image
} from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import musicNotes from '../images/musicNotes.png'
import musicBG from '../images/search-bg.png'

import authToken from '../controllers/token-service'
import axios from 'axios'
import ArtistCards from '../components/ArtistCards'

authToken.getAuthToken()

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [dropDownValue, setDropdownValue] = useState('')

  const getUserInput = e => setSearchInput(e.target.value)

  const handleDropdownClick = e => setDropdownValue(e.target.textContent)

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      await axios.get(`https://api.spotify.com/v1/search?q=${searchInput}&type=${dropDownValue}&limit=5`)
        .then(response => {
          setSearchResults(response.data.artists.items)
        })
    } catch (err) {
      console.log(err)
    }
    setSearchInput('')
  }

  const handleClick = name => {
    console.log(`Card clicked: ${name}`)
  }

  const renderResponseData = searchResults.map(result => (
    <ArtistCards
      key={result.id}
      artist={result}
      artistPic={result}
      handleClick={() => handleClick(result.name)}
    />
  ))

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
                variant='info'
                title={dropDownValue}
                id='input-group-dropdown'
              >
                <Dropdown.Item onClick={(e) => handleDropdownClick(e)} href='#'>artist</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleDropdownClick(e)} href='#'>album</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleDropdownClick(e)} href='#'>track</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
      <div className='content-wrapper'>
        <div className='cards'>
          {renderResponseData}
        </div>
      </div>
    </div>
  )
}

export default Search
