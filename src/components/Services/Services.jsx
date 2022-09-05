import React from "react";
import "./Services.css";
import designImg from "../../utils/Images/design-skill.png";
import developmentImg from "../../utils/Images/develop-skill.png";

function Services() {
  return (
    <div
      id="services"
      className="portfolio__services__main portfolio__main__div"
    >
      <div className="portfolio__services__main__Wrapper__top">
        <div className="portfolio__services__main__Wrapper__top__left">
          <p className="portfolio__services__main__top__design">Design</p>
          <p className="portfolio__services__main__top__design__text">
            Excellent user interface and user experience for your web product
            and other digital assets. The well structured visual design and
            improved usability. Designing UI elements and tools such as
            navigation menus, search boxes, tabs, and widgets for our digital
            assets.
          </p>
        </div>
        <div className="portfolio__services__main__Wrapper__top__right">
          <img
            className="portfolio__services__main__img__design"
            src={designImg}
            alt="web Design"
          />
        </div>
      </div>

      <div className="portfolio__services__main__Wrapper__bottom">
        <div className="portfolio__services__main__Wrapper__bottom__left">
          <p className="portfolio__services__main__bottom__development">
            Development
          </p>
          <p className="portfolio__services__main__bottom__development__text">
            Developing the frontend and backend architecture for your web
            product and digital asset. Creating servers and databases for
            functionality. Ensuring cross-platform optimisation for mobile
            phones and responsiveness for your application. Meeting both your
            technical and consumer needs.
          </p>
        </div>

        <div className="portfolio__services__main__Wrapper__bottom__right">
          <img
            className="portfolio__services__main__img__development"
            src={developmentImg}
            alt="web Development"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
