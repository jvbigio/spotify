import React from 'react'
import './SongCards.css'

import { Card, Image } from 'react-bootstrap'

import music from '../images/flat-music.png'

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const SongCards = ({ artist, artistPic, dropDownValue }) => {
  const artistMedia = artist.album.images[2]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <div className='song-cards'>
      <Card className='artist-card' onClick={() => window.open(artist.external_urls.spotify, '_blank')}>
        <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
          <Image className='song-img pl-2' id='song-img' src={hasMedia()} fluid />
        </a>
        <Card.Body className='content-titles d-flex justify-content-between'>
          <Card.Text className='primary-text' as='div'>
            {artist.name}
          </Card.Text>
          <Card.Text className='secondary-text' as='div'>
            {artist.album.name}
          </Card.Text>
          <Card.Text className='secondary-text' as='div'>
            {millisToMinutesAndSeconds(artist.duration_ms)}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SongCards
