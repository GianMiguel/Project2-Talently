import React from "react";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa"
import { FiCheckSquare } from "react-icons/fi";

export default function Home() {
  return (
    <div className="home--page">
      <div className="hero--container">
        <div className="hero--wrapper">
          <img src={require(`../images/home-img/hero-image.png`)} alt="heroImage" />
          <div className="hero--header">
            <p>Connecting you to the best <i>talents</i> that is perfect for your business.</p>
            <form action="" className="search--bar">
              <input type="text" placeholder='Try "web design" or "front end developer"'/>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="company--logos">
            <p>Trusted  by:</p>
            <img src={require(`../images/home-img/logos/cascadeo.png`)} alt="cascadeo" />
            <img src={require(`../images/home-img/logos/konsultamd.png`)} alt="konsulta" />
            <img src={require(`../images/home-img/logos/zalora.png`)} alt="zalora"  />
            <img src={require(`../images/home-img/logos/gcash.png`)} alt="gcash" />
            <img src={require(`../images/home-img/logos/adspark.png`)} alt="adspark"/>
        </div>

      <div className="field--container">
          <p>Popular Talent Fields:</p>
          <div className="field--wrapper">
            <FaArrowCircleLeft className="arrow--button"/>
            <div className="field--card">
              <span>Web Design</span>
              <img src={require(`../images/home-img/fields/1.png`)} alt="field1" />
            </div>
            <div className="field--card card2">
              <span>Front End <br/> Development</span>
              <img src={require(`../images/home-img/fields/2.png`)} alt="field2" />
            </div>
            <div className="field--card card1">
              <span>Software <br/> Development</span>
              <img src={require(`../images/home-img/fields/3.png`)} alt="field3" />
            </div>
            <div className="field--card card1">
              <span>Graphic Design</span>
              <img src={require(`../images/home-img/fields/4.png`)} alt="field4" />
            </div>
            <FaArrowCircleRight className="arrow--button"/>
          </div>
        </div>


        <div className="features--container">
          <div className="features--textbox">
            <h1>A frontier of awesome and talented professionals are waiting for you connections.</h1>
            <p><FiCheckSquare/> Keep track of your connections.</p>
            <p><FiCheckSquare/> Discover talented professionals in a wide array of fields.</p>
            <p><FiCheckSquare/> Help your business or your company grow.</p>
          </div>
          <div className="features--imgbox">
            <img src={require(`../images/home-img/features-img.png`)} alt="featuresimg" />
          </div>
        </div>

        <div className="testimonials--container">
          <div className="testimonials--imgbox">
            <img src={require(`../images/home-img/testimonials-img.png`)} alt="testimonialsimg" />
          </div>
          <div className="testimonials--textbox">
            <p>"Talently has helped Greater Finance in obtaining two of its best and amazing people. Our tech division was thrilled with their acquisition and so was I."</p>
            <div><i>Daniel Scheider, Co-Founder </i></div>
            <span>Greater Finance | FinTech </span>
          </div>
        </div>
    </div>
  )
}
