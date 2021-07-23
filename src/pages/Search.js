import React, { useState } from 'react'
import './Search.css'
// import '../components/SongCards.css'

import ArtistCards from '../components/ArtistCards'
import AlbumCards from '../components/AlbumCards'
import SongCards from '../components/SongCards'

import {
  Form,
  InputGroup,
  DropdownButton,
  Dropdown
  // Image
} from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
// import musicNotes from '../images/musicNotes.png'
// import musicBG from '../images/search-bg.png'

import authToken from '../controllers/token-service'
import axios from 'axios'

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

  const handleClick = name => {
    console.log(`Card clicked: ${name}`)
  }

  // original
  // const renderResponseData = searchResults.map(result => (
  //   <ArtistCards
  //     key={result.id}
  //     artist={result}
  //     artistPic={result}
  //     dropDownValue={dropDownValue}
  //     handleClick={() => handleClick(result.name)}
  //   />
  // ))
  const renderResponseData = searchResults.map(result => {
    if (dropDownValue === 'artist') {
      return (
        <ArtistCards
          key={result.id}
          artist={result}
          artistPic={result}
          dropDownValue={dropDownValue}
          handleClick={() => handleClick(result.name)}
        />
      )
    } else if (dropDownValue === 'album') {
      return (
        <AlbumCards
          key={result.id}
          artist={result}
          artistPic={result}
          dropDownValue={dropDownValue}
          handleClick={() => handleClick(result.name)}
        />
      )
    } else if (dropDownValue === 'track') {
      return (
        <SongCards
          key={result.id}
          artist={result}
          artistPic={result}
          dropDownValue={dropDownValue}
          handleClick={() => handleClick(result.name)}
        />
      )
    }
  })

  // create another function for getAlbumCards?

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
        {/* orig */}
        {/* <div className='cards'> */}
        {/* <div className='response-cards' style={dropDownValue === 'track' ? { flexDirection: 'column' } : { flexDirection: 'row' }}> */}
        <div className='response-cards'>
          {/* <div className={dropDownValue === 'track' ? 'track-response' : 'response-cards'} id='track-cards'> */}
          {renderResponseData}
        </div>
      </div>
    </div>
  )
}

export default Search
