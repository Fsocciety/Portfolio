import React from 'react'
import githubIcon from "../../assets/githubicon.png"

const Header = () => {
  return (
    <div className="header-container header">
      <a className='logo' href='/'><h1>uroSS();</h1></a>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <a href="https://github.com/uros-simeunovic" target='_blank'><img className='github' src={githubIcon} alt="github-icon" /></a>
    </div>
  )
}

export default Header