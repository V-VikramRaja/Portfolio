import React,{useState} from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMsg, setInputMsg] = useState('');
  const [mailSent, setmailSent] = useState(false);

  

  const nameChangeHandler = (evt) => {
    setInputName(evt.target.value);
  }
  const emailChangeHandler = (evt) => {
    setInputEmail(evt.target.value);
  }
  const msgChangeHandler = (evt) => {
    setInputMsg(evt.target.value);
  }

  const formSubmitHandler = async(evt) => {
    evt.preventDefault();
    await emailjs.sendForm('service_0x6ylnk','template_oyv7y1i',evt.target,'hdWwZr4b7-3HIqfTl')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setmailSent(true);
    setInputName('');
    setInputEmail('');
    setInputMsg('');
  }

  return (
    <div id="contact" className="portfolio__contact__main portfolio__main__div" >
      <div className="portfolio__contact__main__topPart">
        <div className="portfolio__contact__main__topPart__contact" >
          <p>Contact Me</p>
        </div>
        <div className="portfolio__contact__main__topPart__say" >
          <p>Got any Question, having a requirement or wanna say hi,👇</p>
        </div>
      </div>
      <div className="portfolio__contact__main__form__container" >
        <form onSubmit={formSubmitHandler} className="portfolio__contact__form__main" >
          <div className="portfolio__contact__form__main__container" >


            <div className="portfolio__contact__form__name" >
              <input type="text" name="name" value={inputName} placeholder=" Your Name" required onChange={nameChangeHandler} />
              <label htmlFor="name">Your Name:</label>
            </div>


            <div className="portfolio__contact__form__email" >
              <input type="email" name="useremail" required value={inputEmail} placeholder=" Your Email" onChange={emailChangeHandler} />
              <label htmlFor="email">Your E-mail:</label>
            </div>
            
          </div>
          <div className="portfolio__contact__form__sec__container" >
            <div className="portfolio__contact__form__message" >
              <input type="text" name="message" required value={inputMsg} placeholder=" Your message" onChange={msgChangeHandler} />
              <label htmlFor="message" >Your Message:</label>
            </div>
          <button className={mailSent?"contact__email__sent portfolio__contact__form__submit__btn":
                          "portfolio__contact__form__submit__btn"} 
                  type="submit" >{!mailSent? "Shoot >":"Done"}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact