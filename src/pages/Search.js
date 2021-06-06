import React from 'react'
import './Search.css'
import { Form, InputGroup } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='container'>
      <Form className='input-search justify-content-center'>
        <Form.Group controlId='form-search' autoComplete='off'>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id='form-icon'><BsSearch /></InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control type='text' aria-describedby='form-icon' placeholder='Artist, album, or song' />
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Search
