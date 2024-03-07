import React from 'react'
import './hero.css'
import Icon from '/src/IMG/Icon.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
          <h1>we ensure better birds and eggs for a better world</h1>
          <p>Our cutting-edge curriculim is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of farming</p>
          <button className="btn">Explore more <img src={Icon} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
