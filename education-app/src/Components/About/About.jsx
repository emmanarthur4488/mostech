import React from 'react'
import './about.css'
import Blog from '/src/IMG/blog.jpg'


const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
          <img src={Blog} alt="" className="about-img"/>
          <i className="fa-brands fa-youtube" onClick={()=>{setPlayState(true)}}></i>
      </div>
      <div className="about-right">
          <h3>ABOUT POULTRY</h3>
          <h2>Nurturing Tomorrow's Farmers Today</h2>
          <p>Embark on a transformative farming journey with our university's comprehensive farm programs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut magni dolor tempora illum laborum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid dolor, culpa eum quis animi.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, non repellendus architecto distinctio officia magni deleniti voluptate quam consequatur atque!</p>
      </div>
    </div>
  )
}

export default About
