import React, { useState } from "react";
import "./Header.css";
import myImg from "../../utils/Images/header-img.png";
import emailjs from "emailjs-com";

function Header() {
  const [headerEmail, setHeaderEmail] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const headerEmailChangeHandler = (evt) => {
    setHeaderEmail(evt.target.value);
  };
  const headerFormSubmitHandler = async (evt) => {
    evt.preventDefault();
    await emailjs
      .sendForm(
        "service_0x6ylnk",
        "template_i3t2zl7",
        evt.target,
        "hdWwZr4b7-3HIqfTl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMailSent(true);
    setHeaderEmail("");
  };

  return (
    <div id="header" className="portfolio__header__main portfolio__main__div">
      <div className="portfolio__header__wrapper">
        <div className="portfolio__header__wrapper-left">
          <img className="portfolio__header__myImg" src={myImg} alt="Vikram" />
        </div>
        <div className="portfolio__header__wrapper-right">
          <div className="portfolio__header__wrapper-right-part">
            <p className="portfolio__header__main-name">Hi, I’m Vikram Raja.</p>
            <p className="portfolio__header__main-description">
              A Fullstack web developer and designer
            </p>
            <p className="portfolio__header__main-slogan">
              Design and develop your ideas into a excellent web product{" "}
            </p>
            <div>
              <form
                onSubmit={headerFormSubmitHandler}
                className="portfolio__header__email__form"
              >
                <div className="portfolio__header__form__email">
                  <input
                    type="email"
                    name="useremail"
                    placeholder="Your Email"
                    required
                    value={headerEmail}
                    onChange={headerEmailChangeHandler}
                  />
                </div>
                <button
                  className={mailSent ? "portfolio__header__email__sent" : ""}
                >
                  {!mailSent ? "Get Started" : "Done"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
