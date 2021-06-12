import React from 'react'
import './Search.css'
import { Form, InputGroup, Image } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import imageBG from '../images/music-chord-bg.jpg'

const Search = () => {
  return (
    <div className='search-container'>
      <div className='search-form'>
        <Form className='input-search justify-content-center'>
          <Form.Group controlId='form-search' autoComplete='off'>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id='form-icon'><BsSearch /></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type='text' placeholder='Artist, album, or song' />
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
