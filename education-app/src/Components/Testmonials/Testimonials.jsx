import React, { useRef } from 'react'
import './testimonials.css'
import Fashion1 from '/src/IMG/fashion-1.jpg'
import Fashion2 from '/src/IMG/fashion-2.jpg'
import Fashion3 from '/src/IMG/fashion-3.jpg'
import Doctor from '/src/IMG/doctor-1.jpg'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className="testimonials">
      <i className="fa-solid fa-circle-chevron-right" onClick={slideForward}></i>
      <i className="fa-solid fa-circle-chevron-left" onClick={slideBackward}></i>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Fashion1} alt=""/>
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made.
                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Fashion2} alt=""/>
                <div>
                  <h3>Rose Arthur</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made.
                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Fashion3} alt=""/>
                <div>
                  <h3>Christian Friday</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made.
                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Doctor} alt=""/>
                <div>
                  <h3>Samuel Daniel</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decision i've ever made.
                The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
