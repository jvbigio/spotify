import React, { useState } from 'react'
import './Search.css'

import ArtistCards from '../components/ArtistCards'
import AlbumCards from '../components/AlbumCards'
import SongCards from '../components/SongCards'

import {
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
  Button
} from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

import authToken from '../controllers/token-service'
import axios from 'axios'

authToken.getAuthToken()

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [dropDownValue, setDropdownValue] = useState('')

  const getUserInput = e => setSearchInput(e.target.value)

  const handleDropdownClick = e => {
    setDropdownValue(e.target.textContent)

    setSearchResults([])
  }

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      await axios.get(`https://api.spotify.com/v1/search?q=${searchInput}&type=${dropDownValue}&limit=5`)
        .then(response => {
          if (dropDownValue === 'artist') {
            setSearchResults(response.data.artists.items)
          } else if (dropDownValue === 'album') {
            setSearchResults(response.data.albums.items)
          } else if (dropDownValue === 'track') {
            setSearchResults(response.data.tracks.items)
          }
        })
    } catch (err) {
      console.log(err)
    }
    setSearchInput('')
  }

  const renderResponseData = searchResults.map(result => {
    if (dropDownValue === 'artist') {
      return (
        <ArtistCards
          key={result.id}
          artist={result}
          artistPic={result}
          dropDownValue={dropDownValue}
        />
      )
    } else if (dropDownValue === 'album') {
      return (
        <AlbumCards
          key={result.id}
          artist={result}
          artistPic={result}
          dropDownValue={dropDownValue}
        />
      )
    } else if (dropDownValue === 'track') {
      return (
        <SongCards
          key={result.id}
          artist={result}
          artistPic={result}
          dropDownValue={dropDownValue}
        />
      )
    }
  })

  return (
    <div className='search-container'>
      <div className='search-form'>
        <Form onSubmit={handleSearch} className='input-search justify-content-center w-75 d-flex' autoComplete='off'>
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
          <div className='search-btn'>
            <Button
              id='search-btn'
              disabled={!searchInput}
              variant='dark'
              type='submit'
            >
              Enter
            </Button>
          </div>
        </Form>
      </div>
      <div className='content-wrapper'>
        <div className='response-cards' id='response-data'>
          {renderResponseData}
        </div>
      </div>
    </div>
  )
}

export default Search
