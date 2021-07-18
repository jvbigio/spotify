import React from 'react'
import './ArtistCards.css'

import { Card, Container, Row, Col, Image } from 'react-bootstrap'

import { CgProfile } from 'react-icons/cg'

// import artistPic from '../images/music-headphones.jpg'

const ArtistCards = ({ artist, artistPic, handleClick }) => {
  // shows link for img:
  // console.log(response.data.artists.items[0].images[2].url)

  // console.log(artist.images[2].url)

  const artistMedia = artist.images[0] // shows array of images
  // console.log(artistMedia)
  const hasMedia = () => artistMedia ? artistMedia.url : <CgProfile />
  // console.log(artist.images.length)
  // console.log(artistMedia)
  // const artistImage = []
  // artistImage.push(artist.items.images[2])
  // console.log(artistImage)
  const imgStyle = {
    width: '150px',
    height: '150px'
  }

  return (
    <div className='cards'>
      <Card className='artist-card' onClick={(e) => handleClick(e)}>
        <a href={(artistMedia) || <CgProfile />} target='_blank' rel='noreferrer'>
          {/* <img className='artist-img rounded-circle' src={hasMedia()} alt='artist' height='150px' width='150px' /> */}
          <Image className='artist-img rounded-circle w-75 h-75' src={(hasMedia()) || null} fluid />
        </a>
        <Card.Body>
          <Card.Text>
            {artist.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCards
