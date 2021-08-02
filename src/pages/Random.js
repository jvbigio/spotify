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

  const [randomSong, setRandomSong] = useState([])

  const handleClick = name => console.log(name)

  const getRandomCards = favArtists.map(artist => {
    return (
      <RandomCards
        key={artist.name}
        name={artist.name}
        imageSrc={artist.imageSrc}
        // ??
        handleClick={() => handleClick(artist.name)}
      />
    )
  })

  return (
    <div className='random-wrapper'>
      <div className='random-artist-cards'>
        {getRandomCards}
      </div>
    </div>
  )
}

export default Random
