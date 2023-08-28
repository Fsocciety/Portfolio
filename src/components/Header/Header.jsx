import React from 'react'
import { useState } from 'react'
import githubIcon from "../../assets/githubIcon.png"

const Header = ({myRef}) => {
  const [activePage, setActivePage] = useState('Home');

  const clickedPage = (page) => {
    setActivePage(page);
    myRef.current.scrollIntoView();
  }


  return (
    <div className="header-container header">
      <a className='logo' href='/'><h1>uroSS();</h1></a>
      <ul>
        <li onClick={() => clickedPage('Home')} ><a className={activePage === 'Home' ? 'active' : ''} href="/">Home</a></li>
        <li onClick={() => clickedPage('About')} className={activePage === 'About' ? 'active' : ''}>About</li>
        <li onClick={() => clickedPage('Portfolio')} className={activePage === 'Portfolio' ? 'active' : ''}>Portfolio</li>
      </ul>
      <a href="https://github.com/Fsocciety"><img className='github' src={githubIcon} alt="github-icon" /></a>
    </div>
  )
}

export default Header