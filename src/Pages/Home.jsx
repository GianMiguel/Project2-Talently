import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
// import PopularFields from "../Components/PopularFields";
import Testimonials from "../Components/Testimonials";

export default function Home(props) {
  AOS.init();

  // STATE TO MANAGE SEARCH FORM
  const [searchForm, setSearchForm] = React.useState("");

  // Handle form input change
  function handleChange(e) {
    setSearchForm(e.target.value);
  }

  // Handle form submit
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (searchForm === "") return;
    props.handleSearch(searchForm);
  }

  function handleTalentField(e) {
    props.handleSearch(e.target.closest(".field--card").dataset.field);
  }

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
            <form className="search--bar" onSubmit={handleSearchSubmit}>
              <BsSearch className="search--icon" />
              <input
                type="text"
                name="search"
                placeholder='Try "web design" or "front end developer"'
                onChange={handleChange}
                value={searchForm}
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

      {/* <PopularFields /> */}
      <div className="field--container">
        <p>Popular Talent Fields:</p>
        <div className="field--wrapper">
          <div className="field--set--wrapper">
            <div
              className="field--card card1"
              data-aos="fade-up"
              data-field="web design"
              onClick={handleTalentField}
            >
              <span>Web Design</span>
              <img
                src={require(`../images/home-img/fields/1.png`)}
                alt="field1"
              />
            </div>
            <div
              className="field--card"
              data-aos="fade-up"
              data-aos-delay="100"
              data-field="front end development"
              onClick={handleTalentField}
            >
              <span>
                Front End <br /> Development
              </span>
              <img
                src={require(`../images/home-img/fields/2.png`)}
                alt="field2"
              />
            </div>
          </div>
          <div className="field--set--wrapper">
            <div
              className="field--card card2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-field="back end development"
              onClick={handleTalentField}
            >
              <span>
                Back End <br /> Development
              </span>
              <img
                src={require(`../images/home-img/fields/3.png`)}
                alt="field3"
              />
            </div>
            <div
              className="field--card card1"
              data-aos="fade-up"
              data-aos-delay="300"
              data-field="graphic design"
              onClick={handleTalentField}
            >
              <span>Graphic Design</span>
              <img
                src={require(`../images/home-img/fields/4.png`)}
                alt="field4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="features--container">
        <div
          className="features--textbox"
          data-aos="fade-up-right"
          data-aos-once="true"
        >
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
        <div
          className="features--imgbox"
          data-aos="fade-up-left"
          data-aos-once="true"
        >
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
