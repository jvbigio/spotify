import React from 'react'
import './SongCards.css'

import { Card, Image } from 'react-bootstrap'

import music from '../images/flat-music.png'

const SongCards = ({ artist, artistPic, handleClick, dropDownValue }) => {
  // console.log(dropDownValue)
  // response.data.tracks.items
  // console.log(artist.album.images[2])
  const artistMedia = artist.album.images[2]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <div className='song-cards'>
      {/* <div id='song-cards'> */}
      <Card className='song-card' onClick={(e) => handleClick(e)}>
        {/* <Card id='song-card' onClick={(e) => handleClick(e)}> */}
        {/* <Card className={`song-card ${dropDownValue === 'track' ? 'active' : null}`} onClick={(e) => handleClick(e)}> */}
        <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
          {/* <Image className='song-img rounded-circle w-25 h-25' id='song-img' src={hasMedia()} fluid /> */}
          <Image className='song-img' id='song-img' src={hasMedia()} fluid />
        </a>
        <Card.Body>
          <Card.Text>
            {artist.name}
          </Card.Text>
          {/* <Card.Text className='secondary-text'>
            {artist.artists.name}
          </Card.Text> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SongCards
