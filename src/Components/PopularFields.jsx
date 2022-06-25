import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PopularFields() {
  return (
    <div className="field--container">
          <p>Popular Talent Fields:</p>
          <Carousel
              additionalTransfrom={0}
              arrows
              // autoPlay
              // autoPlaySpeed={4000}
              centerMode={false}
              className="field--wrapper"
              containerClass="container-with-dots"
              dotListClass="dots"
              draggable
              focusOnSelect={false}
              infinite
              itemClass
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 4,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 0
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 2,
                  partialVisibilityGutter: 0
                }
              }}
              rewind
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
            
            <div className="field--card" data-aos="fade-up">
              <span>Web Design</span>
              <img src={require(`../images/home-img/fields/1.png`)} alt="field1" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='100'>
              <span>Front End <br/> Development</span>
              <img src={require(`../images/home-img/fields/2.png`)} alt="field2" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='200'>
              <span>Back End <br/> Development</span>
              <img src={require(`../images/home-img/fields/3.png`)} alt="field3" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='300'>
              <span>Graphic Design</span>
              <img src={require(`../images/home-img/fields/4.png`)} alt="field4" />
            </div>
            <div className="field--card" data-aos="fade-up">
              <span>Android<br/> Development</span>
              <img src={require(`../images/home-img/fields/1.png`)} alt="field1" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='100'>
              <span>iOS Development</span>
              <img src={require(`../images/home-img/fields/2.png`)} alt="field2" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='200'>
              <span>Full Stack <br/> Development</span>
              <img src={require(`../images/home-img/fields/3.png`)} alt="field3" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='300'>
              <span>Software <br/> Engineering</span>
              <img src={require(`../images/home-img/fields/4.png`)} alt="field4" />
            </div>
            <div className="field--card" data-aos="fade-up">
              <span>Photography</span>
              <img src={require(`../images/home-img/fields/1.png`)} alt="field1" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='100'>
              <span>Videography</span>
              <img src={require(`../images/home-img/fields/2.png`)} alt="field2" />
            </div>
            <div className="field--card" data-aos="fade-up" data-aos-delay='200'>
              <span>Digital <br/> Animation</span>
              <img src={require(`../images/home-img/fields/3.png`)} alt="field3" />
            </div>
          </Carousel>
        </div>
  )
}
