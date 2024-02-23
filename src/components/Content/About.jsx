import React, { useState } from 'react'

const About = ({myRef}) => {
  const [activePage, setActivePage] = useState('Frontend');

  const clickedPage = (page) => {
    setActivePage(page);

  }

  return (
    <div className='about-section' ref={myRef} id='skills'>
      <div className="skills">
        <h1>Skills</h1>
        <div className="buttons">
          <button onClick={() => clickedPage('Frontend')} className={activePage === 'Frontend' ? 'active' : ''}>Frontend</button>
          <button onClick={() => clickedPage('Backend')} className={activePage === 'Backend' ? 'active' : ''}>Backend</button>
          <button onClick={() => clickedPage('Tools')} className={activePage === 'Tools' ? 'active' : ''}>Tools</button>
        </div>
        {activePage === "Frontend" &&
        <div className="grid">
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <h2>HTML</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <h2>CSS</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <h2>Javascript</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <h2>React</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <h2>React Native</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <h2>Sass</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <h2>Bootstrap</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            <h2>Tailwind</h2>
          </div>
        </div>}
        {activePage === "Backend" && 
        <div className="grid">
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />          
            <h2>NodeJS</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
            <h2>Express</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <h2>Javascript</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <h2>PostgreSQL</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <h2>MySQL</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <h2>React</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <h2>React</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <h2>React</h2>
          </div>
        </div>
        }
        {activePage === "Tools" && 
        <div className="grid">
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <h2>Git</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            <h2>Github</h2>
          </div>
          <div className="item">
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            <h2>Npm</h2>
          </div>
          <div className='item'>
            <img className='icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
            <h2>Docker</h2>
          </div>
        </div>
        }
      </div>
      {/* <div className='about'>
        <h1>About Me</h1>
      </div> */}
    </div>
  )
}

export default About