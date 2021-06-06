import React from 'react'
import './Search.css'
import Form from 'react-bootstrap/Form'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='container'>
      <Form className='input-search justify-content-center'>
        <Form.Group controlId='form-search' autoComplete='off'>
          <span><BsSearch /></span>
          <Form.Control type='text' placeholder='Artist, album, or song' />
        </Form.Group>
      </Form>
    </div>
  )
}

export default Search
