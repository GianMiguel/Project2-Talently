import React from 'react'
import DeveloperCard from '../Components/DeveloperCard'

const About = () => {
  return (
    <div className='about--us--container'>
      <div className='about--us--mission--wrapper'>
        <div className='about--us--img-box'>
          <img
            src={require(`../images/about-us/team.jpg`)}
            alt="mission"
          />
        </div>
        <div className='about--us--mission'>
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ipsam. Necessitatibus assumenda aspernatur saepe amet, a, velit iure vel delectus temporibus facere sint asperiores quas minima aliquam excepturi veniam error.</p>
        </div>
      </div>

      <div className='about--us--vision--wrapper'>
      
        <div className='about--us--vision'>
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ipsam. Necessitatibus assumenda aspernatur saepe amet, a, velit iure vel delectus temporibus facere sint asperiores quas minima aliquam excepturi veniam error.</p>
        </div>
        <div className='about--us--img-box'>
          <img
            src={require(`../images/about-us/visiom.jpg`)}
            alt="mission"
          />
        </div>
      </div>

      <div className='about--us--goal--wrapper'>
        <div className='about--us--img-box'>
          <img
            src={require(`../images/about-us/team.jpg`)}
            alt="mission"
          />
        </div>
        <div className='about--us--goal'>
          <h1>Our Goal</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ipsam. Necessitatibus assumenda aspernatur saepe amet, a, velit iure vel delectus temporibus facere sint asperiores quas minima aliquam excepturi veniam error.</p>
        </div>
      </div>

      <div className='our--team--container'>
        <h1>Our Team</h1>
        <div className='our--team--wrapper'>
          <DeveloperCard />
        </div>
        
      </div>
    </div>
  )
}

export default About
