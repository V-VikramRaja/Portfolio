import React from 'react';
import './Services.css';
import designImg from '../../utils/Images/design-skill.png'
import developmentImg from '../../utils/Images/develop-skill.png'
import Typer from '../Typer';

function Services() {
  return (
    <div id="services" className="portfolio__services__main portfolio__main__div" >
      <div className="portfolio__services__main__wrapper" >
        <div className="portfolio__services__main__Wrapper__left" >
          <div className="portfolio__services__main__left__container">
            <Typer
              dataText={[
                "Web design with a human touch",
                "Make your business shine on the web",
                "Web design that feels right",
                "Great web design is more than pretty pictures",
                "Leading the way in website design",
              ]}
            />
          </div>
          <div className="portfolio__services__main__left__container1">
            <div className="portfolio__services__main__left__container__img">
              <img className="portfolio__services__main__img__design" src={designImg} alt="Computer Design" />
            </div>
            <p className="portfolio__services__main__left__design">Design</p>
            <p className="portfolio__services__main__left__design__text">
              Excellent user interface and user experience for your web product and other digital assets. The well structured visual design and  improved usability. Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.
            </p>
          </div>
        </div>


        <div className="portfolio__services__main__Wrapper__right" >
          <div className="portfolio__services__main__right__container" >
            <div className="portfolio__services__main__right__container2" >
              <div className="portfolio__services__main__right__container__img">
                <img className="portfolio__services__main__img__development" src={developmentImg} alt="Computer Development" />
              </div>
              <p className="portfolio__services__main__right__development">Development</p>
              <p className="portfolio__services__main__right__development__text">
                Developing the frontend and backend architecture for your web product and digital asset. Creating servers and databases for functionality. Ensuring cross-platform optimisation for mobile phones and responsiveness for your application. Meeting both your technical and consumer needs.
              </p>
            </div>
            <div className="portfolio__services__main__left__container">
              <Typer 
                dataText={[
                  "Impressive web marketing solutions",
                  "Inspired web solutions",
                  "Open up your business to new possibilities",
                  "Perfect & productive",
                  "Results driven websites",
                ]}
              />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services