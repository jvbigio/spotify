import React from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
    // <div className='container-fluid home-card'>
    <div className='container home-card'>
      <h1 className='title'>Welcome to Spotify 2.0</h1>
      <main>
        <p>This app allows a user to search for an artist, album or song. Users can save 5 of their favorite music artists and generate a random song from these musicians.</p>
      </main>
      {/* <Image src={musical} className='homeImg' fluid /> */}
    </div>
  )
}

export default Home
