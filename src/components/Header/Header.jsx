import React from 'react'
import { useState } from 'react'
import githubIcon from "../../assets/githubIcon.png"

const Header = () => {
  return (
    <div className="header-container header">
      <a className='logo' href='/'><h1>uroSS();</h1></a>
      <ul>
        <li ><a href="/">Home</a></li>
        <li >About</li>
        <li >Portfolio</li>
      </ul>
      <a href="https://github.com/Fsocciety"><img className='github' src={githubIcon} alt="github-icon" /></a>
    </div>
  )
}

export default Header