import React, { useState } from 'react'
import './Search.css'
import {
  Form,
  InputGroup,
  DropdownButton,
  Dropdown,
  Image
} from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import musicNotes from '../images/music-notes.png'

import authToken from '../controllers/token-service'
import axios from 'axios'
import ArtistCards from '../components/ArtistCards'

// for dummy data:
import metal from '../images/music-headphones.jpg'

authToken.getAuthToken()

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  // const [searchResults, setSearchResults] = useState([])

  // Dummy data
  const [searchResults, setSearchResults] = useState([
    { name: 'Metallica', artistPic: metal },
    { name: 'Metallica', artistPic: metal },
    { name: 'Metallica', artistPic: metal },
    { name: 'Metallica', artistPic: metal },
    { name: 'Metallica', artistPic: metal }
  ])
  const [dropDownValue, setDropdownValue] = useState('')

  const getUserInput = e => setSearchInput(e.target.value)

  const handleClick = e => setDropdownValue(e.target.textContent)

  const handleSearch = async (e) => {
    e.preventDefault()

    // TODO:
    // create option to search by artist, album, or song:
    // const artistUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=artist&limit=10`
    // const albumUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=album&limit=10`
    // const songUrl = `https://api.spotify.com/v1/search?q=${searchInput}&type=track&limit=10`

    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?q=${searchInput}&type=${dropDownValue}&limit=5`)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
    setSearchInput('')
  }

  const renderResponseData = searchResults.map(data => {
    return (
      <ArtistCards
        key={data.name}
        name={data.name}
        artistPic={data.artistPic}
      />
    )
  })

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
                // value={dropDownValue}
                id='input-group-dropdown'
              >
                <Dropdown.Item onClick={(e) => handleClick(e)} href='#'>artist</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleClick(e)} href='#'>album</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleClick(e)} href='#'>track</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
      {/* <Image src={musicNotes} className='musicImage' fluid /> */}
      <div className='content-wrapper'>
        <div className='content'>
          {renderResponseData}
        </div>
      </div>
    </div>
  )
}

export default Search
