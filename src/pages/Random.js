import React, { useState } from 'react'
import './Random.css'
import RandomCards from '../components/RandomCards'

import drake from '../images/drake.jpeg'
import linkinPark from '../images/linkin-park.jpeg'
import metallica from '../images/metallica.jpeg'
import theWeeknd from '../images/the-weeknd.jpeg'
import tiesto from '../images/tiesto.jpeg'

const Random = () => {
  const [favArtists, setFavArtists] = useState([
    { name: 'Drake', imageSrc: drake },
    { name: 'Linkin Park', imageSrc: linkinPark },
    { name: 'Metallica', imageSrc: metallica },
    { name: 'The Weeknd', imageSrc: theWeeknd },
    { name: 'Tiesto', imageSrc: tiesto }
  ])

  return (
    <div />
  )
}

export default Random
