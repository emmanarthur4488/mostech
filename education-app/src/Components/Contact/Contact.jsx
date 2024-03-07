import React from 'react'
import './contact.css'
import AboutIcon from '/src/IMG/about.jpg'


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
          <h3>Send us a message  <i className
          ="fa-solid fa-envelope"></i></h3>
          <p>Feel free to reach out through contact form or find our contact information below.
              Your feedback, questions, and suggestion are important to us as we strive to provide
               exceptional service to our poultry community.
          </p>
          <ul>
              <li><i className="fa-solid fa-envelopes-bulk"></i> ArthurEmmanuel.dev</li>
              <li><i className="fa-solid fa-phone"></i> +234 0906 531 9674</li>
              <li><i className="fa-solid fa-location-dot"></i> 20 Health Center Road, Iko Eket, Akwa Ibom state, Nigeria</li>
          </ul>
          <a href="https://form.jotform.com/240652718915562"><button type='submit' className="btn dark-btn">Order Now <i className="fa-solid fa-arrow-right"></i></button></a>
      </div>
      <div className="contact-col">
          <img src={AboutIcon} alt=""/>
      </div>
    </div>
  )
}

export default Contact
