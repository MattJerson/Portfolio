import React from "react";
import "./Portfolio.css"
import { portfolio } from "../../data";
import Projects from "../../components/Projects";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <Projects key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
