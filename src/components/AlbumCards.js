import React from 'react'
import './AlbumCards.css'

import { Card, Image } from 'react-bootstrap'

import music from '../images/flat-music.png'

const AlbumCards = ({ artist, artistPic, handleClick, dropDownValue }) => {
  // console.log(artist.external_urls)
  console.log(dropDownValue)
  const artistMedia = artist.images[0]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <div className='cards'>
      <Card className='artist-card' onClick={(e) => handleClick(e)}>
        <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
          <Image className='artist-img rounded-circle w-75 h-75' src={hasMedia()} fluid />
        </a>
        <Card.Body>
          <Card.Text>
            {artist.name}
          </Card.Text>
          <Card.Text className='secondary-text'>
            {artist.artists[0].name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AlbumCards
