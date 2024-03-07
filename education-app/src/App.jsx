
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testmonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

function App() {

  const [playState, setPlayState] = useState(false);
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
       <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Gallery' title='Farm Photos'/>
       <Campus/>
       <Title subTitle='TESTIMONIALS' title='What Buyers Says'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='Get in Touch'/>
       <Contact/>
       <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App
