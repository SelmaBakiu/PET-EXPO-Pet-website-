import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="haiderContainer">
        <h1>Welcome to PET EXPO </h1>
        <Link to="/gallery">
        <button>Gallery</button>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Home
