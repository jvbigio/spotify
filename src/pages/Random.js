import React, { useState } from 'react'
import './Random.css'
import RandomCards from '../components/RandomCards'
import SongCards from '../components/SongCards'

import { FAV_ARTISTS } from '../artists'

import axios from 'axios'

const Random = () => {
  const [randomSong, setRandomSong] = useState([])

  const handleClick = async (id) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=us&limit=1`)
      setRandomSong(response.data.tracks)
    } catch (err) {
      console.log(err)
    }
  }

  const getRandomCards = FAV_ARTISTS.map(artist => {
    return (
      <RandomCards
        key={artist.id}
        name={artist.name}
        imageSrc={artist.imageSrc}
        handleClick={() => handleClick(artist.id)}
      />
    )
  })

  const renderRandomSong = randomSong.map(song => {
    return (
      <SongCards
        key={song.id}
        artist={song}
        artistPic={song}
      />
    )
  })

  return (
    <>
      <div className='random-wrapper'>
        <div className='random-artist-cards'>
          {getRandomCards}
        </div>
      </div>
      <div className='song-wrapper'>
        <div className='random-song'>
          {renderRandomSong[Math.floor(Math.random() * randomSong.length)]}
        </div>
      </div>
    </>
  )
}

export default Random
