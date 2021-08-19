import React from 'react'
import './ArtistCards.css'

import { Card, Image } from 'react-bootstrap'

import music from '../images/flat-music.png'

const ArtistCards = ({ artist, artistPic, dropDownValue }) => {
  const artistMedia = artist.images[0]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <div className='artist-cards'>
      <Card className='artist-card' onClick={() => window.open(artist.external_urls.spotify, '_blank')}>
        <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
          <Image className='rounded-circle mt-2 w-100 h-100 p-1' src={hasMedia()} fluid />
        </a>
        <Card.Body>
          <Card.Text>
            {/* {artist.name} */}
            {dropDownValue === 'artist' ? artist.name : null}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCards
