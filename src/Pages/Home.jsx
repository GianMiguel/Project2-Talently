import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import PopularFields from "../Components/PopularFields";
import Testimonials from "../Components/Testimonials";

export default function Home() {
  AOS.init();
  return (
    <div className="home--page">
      <div className="hero--container">
        <div className="hero--wrapper">
          <div className="hero--bg">
            <img
              src={require(`../images/home-img/hero-bg.png`)}
              alt="heroImage"
            />
          </div>
          <div className="hero--header">
            <p>
              Connecting you to the best <i>talents</i> that is perfect for your
              business.
            </p>
            <form action="" className="search--bar">
              <BsSearch className="search--icon" />
              <input
                type="text"
                placeholder='Try "web design" or "front end developer"'
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="company--logos">
        <p>Trusted by:</p>
        <img
          src={require(`../images/home-img/logos/cascadeo.png`)}
          alt="cascadeo"
        />
        <img
          src={require(`../images/home-img/logos/konsultamd.png`)}
          alt="konsulta"
        />
        <img
          src={require(`../images/home-img/logos/zalora.png`)}
          alt="zalora"
        />
        <img src={require(`../images/home-img/logos/gcash.png`)} alt="gcash" />
        <img
          src={require(`../images/home-img/logos/adspark.png`)}
          alt="adspark"
        />
      </div>

      <PopularFields />

      <div className="features--container">
        <div className="features--textbox" data-aos="fade-up-right">
          <h1>
            A frontier of awesome and talented professionals are waiting for you
            connections.
          </h1>
          <p>
            <FiCheckSquare /> Keep track of your connections.
          </p>
          <p>
            <FiCheckSquare /> Discover talented professionals in a wide array of
            fields.
          </p>
          <p>
            <FiCheckSquare /> Help your business or your company grow.
          </p>
        </div>
        <div className="features--imgbox" data-aos="fade-up-left">
          <img
            src={require(`../images/home-img/features-img.png`)}
            alt="featuresimg"
          />
        </div>
      </div>

      <Testimonials />
    </div>
  );
}
