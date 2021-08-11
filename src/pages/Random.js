import React, { useState } from 'react'
import './Random.css'
import RandomCards from '../components/RandomCards'
// test
import SongCards from '../components/SongCards'

import axios from 'axios'

import drake from '../images/drake.jpeg'
import linkinPark from '../images/linkin-park.jpeg'
import metallica from '../images/metallica.jpeg'
import theWeeknd from '../images/the-weeknd.jpeg'
import tiesto from '../images/tiesto.jpeg'

const Random = () => {
  const [favArtists, setFavArtists] = useState([
    { id: '3TVXtAsR1Inumwj472S9r4', name: 'Drake', imageSrc: drake },
    { id: '6XyY86QOPPrYVGvF9ch6wz', name: 'Linkin Park', imageSrc: linkinPark },
    { id: '2ye2Wgw4gimLv2eAKyk1NB', name: 'Metallica', imageSrc: metallica },
    { id: '1Xyo4u8uXC1ZmMpatF05PJ', name: 'The Weeknd', imageSrc: theWeeknd },
    { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Tiesto', imageSrc: tiesto }
  ])

  const [randomSong, setRandomSong] = useState([])

  const handleClick = async (id) => {
    try {
      await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=us&limit=1`)
        .then(response => {
          setRandomSong(response.data.tracks)
          // setRandomSong(response.data.tracks[Math.floor(Math.random() * randomSong.length)])
          // console.log(randomSong.length)
          // setRandomSong([Math.floor(Math.random() * randomSong.length)])
          // setRandomSong(Math.floor(Math.random() * randomSong.length))
        })
    } catch (err) {
      console.log(err)
    }
    // setRandomSong(randomSong[Math.floor(Math.random() * (randomSong.length - 1))])
  }

  const getRandomCards = favArtists.map(artist => {
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
    // handleClick gets top tracks
    // now randomize and only show one here:
    console.log(song.name) // works

    return (
      <SongCards
        key={song.id}
        // artist={song[Math.floor(Math.random() * song.length)]}
        artist={song}
        artistPic={song}
      />
    )
  })

  return (
    <div className='random-wrapper'>
      <div className='random-artist-cards'>
        {getRandomCards}
        {renderRandomSong}
      </div>
    </div>
  )
}

export default Random
