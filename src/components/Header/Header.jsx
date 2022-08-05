import React,{useState} from 'react';
import './Header.css'
import circle1 from '../../utils/Images/fillers/circle1.png';
import circle2 from '../../utils/Images/fillers/circle2.png';
import circle3 from '../../utils/Images/fillers/cicle3.png';
import square1 from '../../utils/Images/fillers/square1.png';
import triangle1 from '../../utils/Images/fillers/tri1.png';
import triangle2 from '../../utils/Images/fillers/tri2.png';
import multipleSquare from '../../utils/Images/fillers/Multiple-squares.png'
import myImg from '../../utils/Images/header-img.png'

function Header() {
  const [headerEmail, setHeaderEmail] = useState('');
  const [mailSent, setMailSent] = useState(false);
  const headerEmailChangeHandler = (evt) => {
    setHeaderEmail(evt.target.value);
  }
  const headerFormSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(headerEmail);
    setMailSent(true);
  }
  

  return (
    <div id="header" className="portfolio__header__main portfolio__main__div" >
      <div className="portfolio__header__wrapper">
        <div className="portfolio__header__wrapper-left">
          <div className="portfolio__header__images1" >
            <img className="portfolio__header__circle1 portfolio__header-img" src={circle1} alt="fillers"/>
            <img className="portfolio__header__square1 portfolio__header-img" src={square1} alt="fillers"/>
            <img className="portfolio__header__circle2 portfolio__header-img" src={circle2} alt="fillers"/>
          </div>
          <img className="portfolio__header__myImg" src={myImg} alt="Vikram"/>
          <div>
            <img className="portfolio__header__circle3 portfolio__header-img" src={circle3} alt="fillers"/>
            <img className="portfolio__header__triangle1 portfolio__header-img" src={triangle1} alt="fillers"/>
          </div>
        </div>
        <div className="portfolio__header__wrapper-right">
          <div className="portfolio__header__wrapper-right-part">
            <img className="portfolio__header__triangle2 portfolio__header-img" src={triangle2} alt="fillers"/>
            <p className="portfolio__header__main-name" >Hi, I’m Vikram Raja.</p>
            <p className="portfolio__header__main-description" >A Fullstack web developer and designer</p>
            <p className="portfolio__header__main-slogan" >Design and develop your ideas into a excellent web product </p>
            <div>
              <form onSubmit={headerFormSubmitHandler} className="portfolio__header__email__form" >
                <div className="portfolio__header__form__email" >
                  <input type="email" name="E-mail" required value={headerEmail} onChange={headerEmailChangeHandler} />
                  <label htmlFor="email">Your E-mail:</label>
                </div>
                <button className={mailSent? 'portfolio__header__email__sent': ''} >{!mailSent? "Get Started": "Done"}</button>
              </form>
            </div>
            <img className="portfolio__header__multipleSquare" src={multipleSquare} alt="fillers"/>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Header