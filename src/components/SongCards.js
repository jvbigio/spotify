import React from 'react'
import './AlbumCards.css'

import { Card, Image } from 'react-bootstrap'

import music from '../images/flat-music.png'

const SongCards = ({ artist, artistPic, handleClick, dropDownValue }) => {
  // console.log(dropDownValue)
  const artistMedia = artist.images[0]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <div className='song-cards'>
      <Card className='song-card' onClick={(e) => handleClick(e)}>
        <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
          <Image className='song-img rounded-circle w-75 h-75' src={hasMedia()} fluid />
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

export default SongCards
