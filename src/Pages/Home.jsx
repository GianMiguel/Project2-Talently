import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <div className="home--page">
      <section className="hero--container">
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
      </section>
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
    </div>
  );
}
