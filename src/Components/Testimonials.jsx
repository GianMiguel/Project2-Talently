import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials() {
  return (
    <div>
      <Carousel
        arrows
        autoPlay
        autoPlaySpeed={6000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        focusOnSelect={false}
        infinite={true}
        keyBoardControl={true}
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        shouldResetAutoplay
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        <div
          className="testimonials--container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="testimonials--imgbox">
            <img
              src={require(`../images/home-img/testimonials/testimonials-img.png`)}
              alt="testimonialsimg"
            />
          </div>
          <div className="testimonials--textbox">
            <p>
              "Talently has helped Greater Finance in obtaining two of its best
              and amazing people. Our tech division was thrilled with their
              acquisition and so was I."
            </p>
            <div>
              <i>Daniel Scheider, Co-Founder </i>
            </div>
            <span>Greater Finance | FinTech </span>
          </div>
        </div>

        <div
          className="testimonials--container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="testimonials--imgbox">
            <img
              src={require(`../images/home-img/testimonials/testimonials-img1.1.jpg`)}
              alt="testimonialsimg"
            />
          </div>
          <div className="testimonials--textbox">
            <p>
              "Talently gives us the ability to discover wonderful and skilled
              people, which helps us recruiters and employers in finding the
              best candidates we need in our company."
            </p>
            <div>
              <i>Andrea Piacquadio, CHRO </i>
            </div>
            <span>DXC Technology </span>
          </div>
        </div>

        <div
          className="testimonials--container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="testimonials--imgbox">
            <img
              src={require(`../images/home-img/testimonials/testimonials-img2.1.jpg`)}
              alt="testimonialsimg"
            />
          </div>
          <div className="testimonials--textbox">
            <p>
              "Having a Talently account as a talent means you are now visible
              to the best places to work in. Having a Talently account as a
              recruiter though? It just makes our life easier"
            </p>
            <div>
              <i>Emmy Ellison, COO </i>
            </div>
            <span>Google</span>
          </div>
        </div>

        <div
          className="testimonials--container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="testimonials--imgbox">
            <img
              src={require(`../images/home-img/testimonials/testimonials-img3.1.jpg`)}
              alt="testimonialsimg"
            />
          </div>
          <div className="testimonials--textbox">
            <p>
              "The talently platform is just a wonderful experience. We've
              already found four employees through talently and we're here for
              more"
            </p>
            <div>
              <i>Austin Distel, HR Director</i>
            </div>
            <span>Oracle</span>
          </div>
        </div>

        <div
          className="testimonials--container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="testimonials--imgbox">
            <img
              src={require(`../images/home-img/testimonials/testimonials-img4.1.jpg`)}
              alt="testimonialsimg"
            />
          </div>
          <div className="testimonials--textbox">
            <p>
              "Because of talently, we were able to find not only good
              employees, but excellent leaders. The talents found here really
              are world class"
            </p>
            <div>
              <i>Christina Wocintechchat, Chief Diversity Officer</i>
            </div>
            <span>Microsoft</span>
          </div>
        </div>

        <div
          className="testimonials--container"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="testimonials--imgbox">
            <img
              src={require(`../images/home-img/testimonials/testimonials-img5.1.jpg`)}
              alt="testimonialsimg"
            />
          </div>
          <div className="testimonials--textbox">
            <p>
              "Talently helps open doors for very talented and wonderful people.
              I've only been using the app for six months and it already has
              been my main source of candidates"
            </p>
            <div>
              <i>Reina Qiu Nagasawa, HR Director </i>
            </div>
            <span>Amazon</span>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
