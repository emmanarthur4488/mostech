import React from 'react'
import './programs.css'
import Broiler from '/src/IMG/broiler.jpg'
import Layer from '/src/IMG/layer.jpg'
import Local from '/src/IMG/local.jpg'

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
              <img src={Broiler} alt=""/>
              <div className="caption">
                  <p>BROILER</p>
              </div>
          </div>

          <div className="program">
              <img src={Layer} alt=""/>
              <div className="caption">
                  <p>LAYER</p>
              </div>
          </div>

          <div className="program">
              <img src={Local} alt=""/>
              <div className="caption">
                  <p>LOCAL</p>
              </div>
          </div>
    </div>
  )
}

export default Programs
