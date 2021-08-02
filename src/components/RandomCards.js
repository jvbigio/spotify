import React from 'react'
import './RandomCards.css'

import { Card, Image } from 'react-bootstrap'

const RandomCards = ({ name, imageSrc, handleClick }) => {
  return (
    <div className='random-cards'>
      <Card className='random-card' onClick={(e) => handleClick(e)}>
        <Image className='rounded-circle mt-2 w-75 h-50 p-1' src={imageSrc} fluid />
        <Card.Body>
          <Card.Text>
            {name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RandomCards
