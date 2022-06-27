import React from "react";
import DeveloperCard from "../Components/DeveloperCard";

const About = () => {
  return (
    <div className="about--us--container">
      <div className="about--us--mission--wrapper">
        <div className="about--us--img-box">
          <img src={require(`../images/about-us/team.jpg`)} alt="mission" />
        </div>
        <div className="about--us--mission">
          <h1>Our Mission</h1>
          <p>
            As a company, Talently provides a platform for hard working
            recruiters and exceptional talents to spark a connection and provide
            opportunity for them to help each other. We are commited in
            delivering an awesome experience for any kind of users of this
            application
          </p>
        </div>
      </div>

      <div className="about--us--vision--wrapper">
        <div className="about--us--vision">
          <h1>Our Vision</h1>
          <p>
            We believe that in the future, the supply for tech and digital
            fields will not be able to catch up to the demands of the market and
            Talently is here to help alleviate that gap. We're all about giving
            opportunities to those who deserve it and we're here to provide just
            that.
          </p>
        </div>
        <div className="about--us--img-box">
          <img src={require(`../images/about-us/visiom.jpg`)} alt="mission" />
        </div>
      </div>

      <div className="about--us--goal--wrapper">
        <div className="about--us--img-box">
          <img src={require(`../images/about-us-3.jpg`)} alt="mission" />
        </div>
        <div className="about--us--goal">
          <p>
            This project was made to showcase our team's proficiency in front
            end development.
          </p>
        </div>
      </div>

      <div className="our--team--container">
        <h1>
          Meet the people behind{" "}
          <span className="about--brand--text">talently</span>
          <span className="about--brand--dot">.</span>
        </h1>
        <div className="our--team--wrapper">
          <DeveloperCard />
        </div>
      </div>
    </div>
  );
};

export default About;
