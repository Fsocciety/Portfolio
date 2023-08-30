import React from 'react'
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx'
import About from './About.jsx'

const Content = () => {

  return (
    <div className='container'>
      <Home />
      <About/>
      <Portfolio/>
    </div>
  )
}

export default Content