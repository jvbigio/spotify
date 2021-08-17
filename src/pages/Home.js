import React from 'react'
import './Home.css'
// import { Image, Carousel } from 'react-bootstrap'
// import vinyl from '../images/vinyl-record.jpg'

import album1 from '../images/grid-img-1.png'
import album2 from '../images/grid-img-2.png'
import album3 from '../images/grid-img-3.png'
import album4 from '../images/grid-img-4.png'
import album5 from '../images/grid-img-5.png'
import album6 from '../images/grid-img-6.png'
import album7 from '../images/grid-img-7.png'

const Home = () => {
  return (
    <div className='container home-card'>
      <h1 className='title'>Welcome to Spotify 2.0</h1>
      <div className='intro'>
        <p>This app allows a user to search for an artist, album or song. Users can save 5 of their favorite music artists and generate a random song from these musicians.</p>
      </div>
      <div className='gallery'>
        <figure className='gallery__item gallery__item--1'>
          <img src={album1} className='gallery__img' alt='album cover 1' />
        </figure>
        <figure className='gallery__item gallery__item--2'>
          <img src={album2} className='gallery__img' alt='album cover 2' />
        </figure>
        <figure className='gallery__item gallery__item--3'>
          <img src={album3} className='gallery__img' alt='album cover 3' />
        </figure>
        <figure className='gallery__item gallery__item--4'>
          <img src={album4} className='gallery__img' alt='album cover 4' />
        </figure>
        <figure className='gallery__item gallery__item--5'>
          <img src={album5} className='gallery__img' alt='album cover 5' />
        </figure>
        <figure className='gallery__item gallery__item--6'>
          <img src={album6} className='gallery__img' alt='album cover 6' />
        </figure>
      </div>
    </div>
  )
}

export default Home
