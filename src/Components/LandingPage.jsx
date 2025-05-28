import React from 'react'
import '../assets/styles/landingpage.css'
import bg_video from '../assets/images/bg_video.mp4'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  let login = useNavigate()

  let handleLogin = () => {
    login("/logingpage")
  }


  return (
    <>
      <div className="landingpage">
        <div className="container">
          <video autoPlay loop muted className="bg-video">
            <source src={bg_video} type="video/mp4" />
          </video>

          <div className="text">
            <h1>Chilling</h1>

            <div className="login-btn">
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default LandingPage