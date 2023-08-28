import React from 'react'
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx'
import About from './About.jsx'

const Content = ({myRef}) => {

  return (
    <div className='container'>
      <Home />
      <About myRef={myRef}/>
      <Portfolio myRef={myRef}/>
    </div>
  )
}

export default Content