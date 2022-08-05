import React from 'react';
import './Footer.css';
import facebook from '../../utils/Images/social-icons/🦆 icon _facebook_.png';
import insta from '../../utils/Images/social-icons/🦆 icon _instagram icon_.png';
import twitter from '../../utils/Images/social-icons/🦆 icon _twitter_.png';
import linkedIn from '../../utils/Images/social-icons/🦆 icon _linkedin_.png';
import github from '../../utils/Images/social-icons/🦆 emoji _github_.png';

const Footer = () => {
    return (
        <div className="portfolio__footer__main portfolio__main__div" >
            <div className="portfolio__main__footer__container" >
                <div className="portfolio__main__footer__container__social" >   
                    <a target="_blank" rel="noopener noreferrer"href="https://www.facebook.com/vikramraja23/"  >
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dev__v_i_c_k_y_/" >
                        <img src={insta} alt="instagram" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/VikramRaja23" >
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vikram-raja-839444191/" >
                        <img src={linkedIn} alt="Linked-In" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/V-VikramRaja" >
                        <img src={github} alt="github" />
                    </a>
                </div>
                <div className="portfolio__main__footer__container__copy" >
                    <p>© Vikram Raja</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
