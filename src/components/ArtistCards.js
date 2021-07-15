import React from 'react'
import './ArtistCards.css'

import { Card, Container, Row, Col, Image } from 'react-bootstrap'

// import artistPic from '../images/music-headphones.jpg'

const ArtistCards = ({ name, artistPic, handleClick }) => {
  return (
    <div className='container-fluid'>
      {/* <Card className='artist-card' onClick={(e) => handleClick(e)}> */}
      <Card className='artist-card'>
        <img className='artist-img rounded-circle' src={artistPic} alt='artist' height='150px' width='150px' />
        {/* <Image src={artistPic} className='artistImg rounded-circle' fluid /> */}
        <Card.Body>
          <Card.Text>
            {/* {name} */}
            Metallica
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCards
