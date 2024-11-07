import Card from "@/components/Card";
import ClientLogo from "@/components/homepage/ClientLogo";
import FlagImg from "@/components/homepage/FlagImg";
import HeaderCarosel from "@/components/homepage/HeaderCarousel";
import SlidingImg from "@/components/homepage/SliderImg";
import React from "react";

export default function Home() {
  return (
    <>
      <HeaderCarosel />
     
      {/* <!-- CTA Section Start --> */}
      <div
        className="cta-section"
        data-bg-image="images/background/cta-bg.webp"
      >
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* <!-- CTA Content Start --> */}
              <div className="cta-content">
                <h3 className="title">
                  For Any Information Please{" "}
                  <span className="text-bold">Call us now!</span>
                </h3>
                <p>We prodive a dedicated support 24/7 for any your question</p>
              </div>
              {/* <!-- CTA Content End --> */}
            </div>
            <div className="col-lg-5">
              {/* <!-- CTA Phone Number Start --> */}
              <div className="cta-phone text-lg-end text-strat">
                <a href="tel:+96824621546">
                  {" "}
                  <h2 className="title">+968 24621546</h2>
                </a>
              </div>
              {/* <!-- CTA Phone Number Start --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CTA Section End --> */}

      {/* <!-- About Section --> */}
      <div className="about-section" id="about">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              <SlidingImg />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Services Section --> */}
      <div className="py-5" id="what_we_do">
        <div className="auto-container">
          <div className="sec-title">
            <div className="title">Our Services</div>
            <h2>
              <span>What</span> We Do
            </h2>
          </div>
          <div className="inner-container">
            <div className="row">
              {/* Service Block 1 */}
              <Card
                title={"XDS"}
                subHeading={"XOM Drilling Systems"}
                list1={"Directional Drilling"}
                list2={"LWD"}
                list3={"MWD"}
                y={-100}
                path="cardimage-1.jpg"
              />

              {/* Service Block 2 */}
              <Card
                title={"XWM"}
                subHeading={"XOM Well Maintenance"}
                list1={"Well Head Maintenance"}
                list2={"Slickline"}
                list3={"NCP"}
                y={100}
                path="cardimage-2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Services Section --> */}

      <div className="project-section" id="where_we_operate">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title">
            <div className="clearfix">
              <div className="pull-left">
                <div className="title">Local Experience, Global Expertise</div>
                <h2>
                  Where <span>We Operate</span>
                </h2>
              </div>
              <div className="pull-right">
                {/* Additional content can go here */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row clearfix">
            <FlagImg
              src={"/images/iraq.webp"}
              alt={"Iraq"}
              width={300}
              height={100}
              x={-100}
            />
            <FlagImg
              src={"/images/oman.webp"}
              alt={"Oman"}
              width={250}
              height={100}
              x={100}
            />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title mb-0">
            <div className="title">Testimonials</div>
            <h2>
              Our <span>Clients</span>
            </h2>
          </div>
        </div>
      </div>
      {/* End Testimonial Section */}

      {/* Sponsors Section */}
      <ClientLogo />

      {/* End Sponsors Section */}

      {/* Map Section */}
      <div className="map-section">
        <div className="contact-map-area">
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.77219523658755!2d58.412216390354246!3d23.58588870550494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff9967575fd1%3A0x6bdeb83b53fa8e2c!2sOffice%201991!5e0!3m2!1sen!2sin!4v1730627262231!5m2!1sen!2sin"
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
      {/* End Map Section */}
    </>
  );
}
