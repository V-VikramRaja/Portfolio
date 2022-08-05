import React from 'react';
import './Projects.css';
import port from '../../utils/Images/projects/Mask group.png'
import cloud from '../../utils/Images/projects/Mask group-1.png'
import spic from '../../utils/Images/projects/Mask group-2.png'

function Projects() {
  return (
    <div id="projects" className="portfolio__projects__main portfolio__main__div">
        <h2 className="portfolio__projects__main__heading" >Projects/Samples</h2>
      <div className="portfolio__projects__main__wrapper" >
        <div className="portfolio__projects__main__wrapper__div1">
          <div className="portfolio__projects__main__wrapper__div1_sec1">
            <img className="portfolio__project__imgs" src={spic} alt="watch store project"/>
          </div>
          <div className="portfolio__projects__main__wrapper__div1_sec2">
            <h2 ><a href="https://github.com/V-VikramRaja/watch-store-project">Spic Store</a></h2>
            <p>A Full-stack watch selling store with admin panel with user authorisation and authentication.  </p>
          </div>
        </div>
        <div className="portfolio__projects__main__wrapper__div2">
          <div className="portfolio__projects__main__wrapper__div2_sec1">
            <img className="portfolio__project__imgs" src={cloud} alt="watch store project"/>
          </div>
          <div className="portfolio__projects__main__wrapper__div2_sec2">
            <h2> <a href="https://github.com/V-VikramRaja/cloud-website" >MyCloud</a></h2>
            <p>A fontend project, design and development of a website about cloud service provider</p>
          </div>
        </div>
        <div className="portfolio__projects__main__wrapper__div3">
          <div className="portfolio__projects__main__wrapper__div3_sec1">
            <img className="portfolio__project__imgs" src={port} alt="watch store project"/>
          </div>
          <div className="portfolio__projects__main__wrapper__div3_sec2">
            <h2> <a href="https://github.com/V-VikramRaja/model-portfolio" >Portfolio templates</a> </h2>
            <p>A portfolio template for others to edit and modify according to their needs.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects