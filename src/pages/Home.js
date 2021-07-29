import React from 'react'
import './Home.css'
import { Image, Carousel } from 'react-bootstrap'

import vinyl from '../images/vinyl-record.jpg'

const Home = () => {
  return (
    <div className='container home-card'>
      <h1 className='title'>Welcome to Spotify 2.0</h1>
      <div className='intro'>
        <p>This app allows a user to search for an artist, album or song. Users can save 5 of their favorite music artists and generate a random song from these musicians.</p>
      </div>
      <div className='image-container'>
        <Image src={vinyl} fluid />
      </div>
    </div>
  )
}

export default Home
