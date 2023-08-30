import React from 'react'
import externalLink from './../../assets/external-link.png'
import githubLink from './../../assets/github-portfolio.png'
import portfolioProject from './../../assets/portfolio-project.png'

const Portfolio = ({myRef}) => {
  return (
    <div ref={myRef} className="portfolio-section">
      <h1>Projects</h1>
      
      <div className="portfolio">
        <div className="portfolio-item">
          <img className='project-image' src={portfolioProject} />
          <h2 className='project-name'>Project name</h2>
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit.</p>
          <div className='tech'>
            <h3>React</h3>
            <h3>NodeJS</h3>
          </div>
          <div className="links">
            <img src={githubLink} />
            <img src={externalLink} />
          </div>
        </div>
        <div className="portfolio-item">
          <img className='project-image' src={portfolioProject} />
          <h2 className='project-name'>Project name</h2>
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit.</p>
          <div className='tech'>
            <h3>React</h3>
            <h3>NodeJS</h3>
          </div>
          <div className="links">
            <img src={githubLink}/>
            <img src={externalLink}/>
          </div>
        </div>
        <div className="portfolio-item">
          <img className='project-image' src={portfolioProject} />
          <h2 className='project-name'>Project name</h2>
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit.</p>
          <div className='tech'>
            <h3>React</h3>
            <h3>NodeJS</h3>
          </div>
          <div className="links">
            <img src={githubLink}/>
            <img src={externalLink}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio