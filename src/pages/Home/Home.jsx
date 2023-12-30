import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Profile from "../../assets/Home.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm MJ Figueroa.</span> Web Designer
          </h1>
          <p className="home__description">
            I am a web designer and front-end developer from the Philippines,
            dedicated to creating a sleek and user-friendly interface. My
            enthusiasm lies in developing outstanding software that enhances the
            lives of those in my community.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
