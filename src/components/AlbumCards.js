import React from 'react'
import './AlbumCards.css'

import { Card, Image } from 'react-bootstrap'

import music from '../images/flat-music.png'

const AlbumCards = ({ artist, artistPic, dropDownValue }) => {
  const artistMedia = artist.images[0]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <div className='album-cards'>
      <Card className='album-card' onClick={() => window.open(artist.external_urls.spotify, '_blank')}>
        <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
          <Image className='album-img w-90 h-75' src={hasMedia()} rounded fluid />
        </a>
        <Card.Body className='pt-0'>
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
