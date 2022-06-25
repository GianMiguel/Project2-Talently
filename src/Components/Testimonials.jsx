import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                    min: 1024
                },
                items: 1,
                partialVisibilityGutter: 40
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
                }
            }}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            swipeable
            >


            <div className="testimonials--container" 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out">
                <div className="testimonials--imgbox" >
                    <img src={require(`../images/home-img/testimonials/testimonials-img.png`)} alt="testimonialsimg" />
                </div>
                <div className="testimonials--textbox">
                    <p>"Talently has helped Greater Finance in obtaining two of its best and amazing people. Our tech division was thrilled with their acquisition and so was I."</p>
                    <div><i>Daniel Scheider, Co-Founder </i></div>
                    <span>Greater Finance | FinTech </span>
                </div>
            </div>

            <div className="testimonials--container" 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out">
                <div className="testimonials--imgbox" >
                    <img src={require(`../images/home-img/testimonials/testimonials-img1.1.jpg`)} alt="testimonialsimg" />
                </div>
                <div className="testimonials--textbox">
                    <p>"Talently gives you the ability to showcase your profile, expertise, recommendations and connections, which helps recruiters and employers to search for the best candidates they need in their company."</p>
                    <div><i>Andrea Piacquadio, CHRO </i></div>
                    <span>DXC Technology </span>
                </div>
            </div>

            <div className="testimonials--container" 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out">
                <div className="testimonials--imgbox" >
                    <img src={require(`../images/home-img/testimonials/testimonials-img2.1.jpg`)} alt="testimonialsimg" />
                </div>
                <div className="testimonials--textbox">
                    <p>"Having Talently account means that you can use the site to research companies, interviewers, recruiters, and hiring managers which is helpful for candidates before submitting their applications."</p>
                    <div><i>Emmy Ellison, COO </i></div>
                    <span>Google</span>
                </div>
            </div>

            <div className="testimonials--container" 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out">
                <div className="testimonials--imgbox" >
                    <img src={require(`../images/home-img/testimonials/testimonials-img3.1.jpg`)} alt="testimonialsimg" />
                </div>
                <div className="testimonials--textbox">
                    <p>"Having a Talently profile helps build trust with employers and recruiters as they can see your recommendations and connections and evidence of where you have added value."</p>
                    <div><i>Austin Distel, HR Director</i></div>
                    <span>Oracle</span>
                </div>
            </div>

            <div className="testimonials--container" 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out">
                <div className="testimonials--imgbox" >
                    <img src={require(`../images/home-img/testimonials/testimonials-img4.1.jpg`)} alt="testimonialsimg" />
                </div>
                <div className="testimonials--textbox">
                    <p>"New opportunities exist throughout the Talently site that may not exist on traditional job boards. You can directly apply for roles using Talently apply, save job searches, as well as flagging to recruiters that you are open to hearing about opportunities."</p>
                    <div><i>Christina Wocintechchat, Chief Diversity Officer</i></div>
                    <span>Microsoft</span>
                </div>
            </div>

            <div className="testimonials--container" 
                data-aos="fade-right" 
                data-aos-duration="1000" 
                data-aos-easing="ease-in-out">
                <div className="testimonials--imgbox" >
                    <img src={require(`../images/home-img/testimonials/testimonials-img5.1.jpg`)} alt="testimonialsimg" />
                </div>
                <div className="testimonials--textbox">
                    <p>"Talently is a brilliant tool for researching organisations and people that work at them. You can use this to target people within your network that work for organisations that you really want to work for."</p>
                    <div><i>Reina Qiu Nagasawa, HR Director </i></div>
                    <span>Amazon</span>
                </div>
            </div>
        </Carousel>
      </div>
  )
}
