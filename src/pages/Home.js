import React from 'react'
import './Home.css'

import album1 from '../images/grid-img-1.png'
import album2 from '../images/grid-img-2.png'
import album3 from '../images/grid-img-3.png'
import album4 from '../images/grid-img-4.png'
import album5 from '../images/grid-img-5.png'
import album6 from '../images/grid-img-6.png'

const Home = () => {
  return (
    <div className='container home-card'>
      <h1 className='title'>Welcome to Spotify 2.0</h1>
      <div className='intro'>
        <p>This app allows a user to search for an artist, album or song. Users can also save 5 of their favorite music artists and generate a random song from these musicians.</p>
      </div>
      <div className='gallery'>
        <figure className='gallery__item gallery__item--1'>
          <img
            src={album1}
            className='gallery__img'
            alt='album cover 1'
            onClick={() => window.open('https://open.spotify.com/album/57bABnvvPfNhBQRI70dqlU', '_blank')}
          />
        </figure>
        <figure className='gallery__item gallery__item--2'>
          <img
            src={album2}
            className='gallery__img'
            alt='album cover 2'
            onClick={() => window.open('https://open.spotify.com/playlist/37i9dQZF1DX82pCGH5USnM', '_blank')}
          />
        </figure>
        <figure className='gallery__item gallery__item--3'>
          <img
            src={album3}
            className='gallery__img'
            alt='album cover 3'
            onClick={() => window.open('https://open.spotify.com/album/2pKw6GERJVAD61449B1EEM', '_blank')}
          />
        </figure>
        <figure className='gallery__item gallery__item--4'>
          <img
            src={album4}
            className='gallery__img'
            alt='album cover 4'
            onClick={() => window.open('https://open.spotify.com/album/5Nrx0GEDuLwrQcEvb1IM8l', '_blank')}
          />
        </figure>
        <figure className='gallery__item gallery__item--5'>
          <img
            src={album5}
            className='gallery__img'
            alt='album cover 5'
            onClick={() => window.open('https://open.spotify.com/album/481JiVXZYUlTtqlv9ewJXV', '_blank')}
          />
        </figure>
        <figure className='gallery__item gallery__item--6'>
          <img
            src={album6}
            className='gallery__img'
            alt='album cover 6'
            onClick={() => window.open('https://open.spotify.com/album/6QdCohkHKNTVoaSx1ZzitH', '_blank')}
          />
        </figure>
      </div>
    </div>
  )
}

export default Home
