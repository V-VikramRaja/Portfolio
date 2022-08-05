import React from 'react';
import './About.css'
import ownImage from  '../../utils/Images/About-image.png';

function About() {
  return (
    <div id="about" className="portfolio__about__main portfolio__main__div" >
      <div className="portfolio__about__main__wrapper">
        <div className="portfolio__about__wrapper__left">
          <div className="portfolio__about__wrapper__left__img__container"> 
            <img className="portfolio__about__wrapper__left__img" src={ownImage} alt="Vikram Raja" />
          </div>
        </div>
        <div className="portfolio__about__wrapper__right" >
          <h2 className="portfolio__about__wrapper__right__about" >About Me</h2>
          <div className="portfolio__about__wrapper__right__div1" >
            <h3 className="portfolio__about__wrapper__right__Who" >So Who Am I</h3>
            <p>I am Vikram Raja. A full stack web developer and designer.I built web products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focused on fast and elegence.</p>
          </div >
          <div className="portfolio__about__wrapper__right__div2" >
            <h3 className="portfolio__about__wrapper__right__what" >What I Do</h3>
            <p> I develop frontend website with HTML, CSS, JavaScript, TypeScript and React. Using Node.js, Python, Express.js, Mongodb and Sql for backend. </p>
          </div>
          <div className="portfolio__about__wrapper__right__div3" >
            <h3 className="portfolio__about__wrapper__right__why" >Why Me</h3>
            <p> Being dedicated, hardworking and result oriented developer, I always work towards achieving best result on each project I lay my hands on. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About