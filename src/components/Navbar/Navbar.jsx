import React, {useState} from "react";
import "./Navbar.css";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {Link} from 'react-scroll';

export default function Navbar() {

  const [activeNav, setActiveNav] =  useState({active: "header"});
  const [toggleMenu, setToggleMenu] = useState(false);;

  const headerActiveHandler = (nav) => {
    setActiveNav({active: nav});
  }
  
  const Menu = () => {
    return (
      <>
        <p>
          <Link 
            className={activeNav.active==="header"?"navbar__link__active":""}  
            onClick={() => headerActiveHandler("header")} to="header" smooth = {true} duration={1000} >
            Home
          </Link>
        </p>
        <p>
          <Link className={activeNav.active==="services"?"navbar__link__active":""}  
              onClick={() => headerActiveHandler("services")} to="services" smooth = {true} duration={1000} >
              Services
          </Link>
        </p>
        <p>
          <Link className={activeNav.active==="skills"?"navbar__link__active":""}  
              onClick={() => headerActiveHandler("skills")} to="skills" smooth = {true} duration={1000} >
              Skills
            </Link>
        </p>
        <p>
          <Link className={activeNav.active==="about"?"navbar__link__active":""}  
              onClick={() => headerActiveHandler("about")} to="about" smooth = {true} duration={1000} >
              About
          </Link>
        </p>
        <p>
          <Link className={activeNav.active==="projects"?"navbar__link__active":""}  
              onClick={() => headerActiveHandler("projects")} to="projects" smooth = {true} duration={1000} >
                Projects
          </Link>
        </p>
        <p>
          <Link className={activeNav.active==="contact"?"navbar__link__active":""}  
              onClick={() => headerActiveHandler("contact")} to="contact" smooth = {true} duration={1000} >
                Contact
          </Link>
        </p>
        
      </>
    );
  };

  const Fullnav = () =>(
    <div  className="portfolio__navbar__main">
      <div className="portfolio__navbar-container">
        <div className="portfolio__navbar-logo__name">
          <p>Vikram Raja</p>
        </div>
        <div className="portfolio__navbar-container__links">
          <Menu />
        </div>
      </div>
    </div>
  );

  const MobNav = () =>(
    <div  className="portfolio__navbar__mobile scale-up-center">
      <div className="portfolio__navbar-container__mobile">
        <div className="portfolio__navbar-container__links__mobile">
          <Menu />
        </div>
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <Fullnav className="portfolio__navbar__fullNav" />
      <div className="portfolio__navbar__mobile__container" >
        {toggleMenu ? 
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />:
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        <div className="portfolio__navbar-logo__namer__mobile">
          <p>Vikram Raja</p>
        </div>
        {toggleMenu && (
            <MobNav/>
          )}
      </div>
      
    </React.Fragment>
    
  )
}

