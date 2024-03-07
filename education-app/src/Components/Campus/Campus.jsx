import React from 'react'
import './campus.css'
import Farm1 from '/src/IMG/farm1.jpg'
import Farm2 from '/src/IMG/farm2.jpg'
import Farm3 from '/src/IMG/farm3.jpg'
import Farm4 from '/src/IMG/farm4.jpg'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
          <img src={Farm1} alt=""/>
          <img src={Farm2} alt=""/>
          <img src={Farm3} alt=""/>
          <img src={Farm4} alt=""/>
      </div>
      <button className="btn dark-btn">see more here <i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default Campus
