import React from 'react'
import './SongCards.css'

import { Card, Col, Image, Row, Container } from 'react-bootstrap'

import music from '../images/flat-music.png'

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const SongCards = ({ artist, artistPic, handleClick, dropDownValue }) => {
  const artistMedia = artist.album.images[2]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <Container>
      <div className='song-cards'>
        <Card className='song-card' onClick={() => window.open(artist.external_urls.spotify, '_blank')}>

          <Card.Body className='content-titles d-flex justify-content-between'>
            <Row>
              <Col xs='3'>
                <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
                  <Image className='song-img pl-2' src={hasMedia()} fluid />
                </a>
              </Col>
              <Col xs='3'>
                <Card.Text className='primary-text' as='div'>
                  {artist.name}
                </Card.Text>
              </Col>
              <Col xs='3'>
                <Card.Text className='secondary-text' as='div'>
                  {artist.album.name}
                </Card.Text>
              </Col>
              <Col xs='3' className='float-right'>
                <Card.Text className='secondary-text' as='div'>
                  {millisToMinutesAndSeconds(artist.duration_ms)}
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}

export default SongCards
