import React from 'react'
import './Home.css'

import { ALBUMS } from '../albums'

const Home = () => {
  return (
    <div className='container home-card'>
      <h1 className='title'>Welcome to Spotify 2.0</h1>
      <div className='intro'>
        <p>This app allows a user to search for an artist, album or song. Users can also save 5 of their favorite music artists and generate a random song from these musicians.</p>
      </div>
      <div className='gallery'>
        {ALBUMS.map(album => (
          <figure className={`gallery__item gallery__item--${album.id}`} key={album.id}>
            <img
              src={album.src}
              className='gallery__img'
              alt={`album cover ${album.id}`}
              onClick={() => window.open(`${album.url}`, '_blank')}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

export default Home
