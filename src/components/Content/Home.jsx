import React from 'react'
import avatar from '../../assets/avatar.png'

const Home = () => {
  return (
    <div className='home-section'>
      <div className="home">
        <div className='text-wrapper'>
          <p className='hello'>Hello, I am</p>
          <h1 className='name'>Uros Simeunovic</h1>
          <h3>Web Developer</h3>
          <p className='welcome'>Welcome to my personal website</p>
        </div>
        <div className="image-wrapper">
          <img className='avatar' src={avatar} alt="avatar"/>
        </div>
      </div>
    </div>
  )
}

export default Home