import React from "react";
import "./Contact.css";
import { FiSend } from "react-icons/fi";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Contact Me!</h3>
          <p className="contact__description">
            Don't hesitate to reach out to me. I'm always available to talk
            about potential new projects, innovative ideas, or opportunities to
            contribute to your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">mattjersonn@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+63 961 183 1986</h4>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="" className="contact__social-link">
              <FaMeta />
            </a>
            <a href="" className="contact__social-link">
              <FaXTwitter />
            </a>
            <a href="" className="contact__social-link">
              <FaGithub />
            </a>
            <a href="" className="contact__social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
