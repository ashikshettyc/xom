import ClientLogo from '@/components/homepage/ClientLogo';
import HeaderCarosel from '@/components/homepage/HeaderCarousel';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <>
      <HeaderCarosel />
      {/* // Banner Section */}
      {/* <div className="banner-section" id="intro">
        <div className="main-slider-carousel owl-carousel owl-theme">
          <div className="slide" data-bg-image="images/main-slider/intro-1.jpg">
            <div className="auto-container w-100">
              <div className="row clearfix">
                <div className="content-column col-lg-7 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="title">XOM Oilfield Services</div>
                    <h1>
                      Global <span>Aspirations</span>,<br />
                      Local <span>Inspirations</span>
                    </h1>
                    <div className="text">
                      XOM inherited its drive, culture, values, and ambitions
                      and <br />
                      is deeply rooted to XOM Oilfield Services. During this
                      period, <br />
                      XOM has grown to become one of the most successful
                      <br />
                      technology companies in Oman.
                    </div>
                    <div className="btn-box">
                      <Link
                        href="contact-us"
                        className="theme-btn btn-style-one"
                      >
                        <span className="txt">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- CTA Section Start --> */}
      <div className="cta-section" data-bg-image="images/background/cta-bg.jpg">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* <!-- CTA Content Start --> */}
              <div className="cta-content">
                <h3 className="title">
                  For Any Information Please{' '}
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
                  {' '}
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
              <div className="image-column col-lg-6">
                <div className="about-image">
                  <div className="about-inner-image">
                    <Image
                      src="/images/about/home-about.webp"
                      width={600}
                      height={600}
                      alt="about"
                    />
                  </div>
                </div>
              </div>

              <div className="content-column col-lg-6 col-md-12 col-sm-12 mb-0">
                <div className="about-column">
                  <div className="sec-title">
                    <div className="title">about XOM</div>
                    <h2>
                      Led by the <span>belief</span> that anyone can{' '}
                      <span>grow</span>
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      XOM has been operating in Oman for over 7 years having
                      being founded in 2016. XOM inherited it’s drive, culture,
                      values and ambitions and is deeply rooted to XOM Oilfield
                      Services. During this period, XOM has grown to become one
                      of the most successful technology companies in Oman and is
                      often cited as a leading example of the new wave of
                      oilfield entrepreneurship in the country and beyond.
                    </p>

                    <p>
                      Furthermore, XOM maintains a high in-country value (ICV),
                      high service standard, innovative technologies, carried
                      out with young state of the art equipment, XOM
                      differentiates itself from its competitors in value for
                      money. Our professional, experienced team of operators and
                      engineers achieve a world-className service at a very high
                      safety standard.
                    </p>
                  </div>
                </div>
              </div>
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
            <div className="row clearfix">
              {/* <!-- Service Block --> */}
              <div className="service-block style-two col-lg-6 col-md-6 col-12">
                <div className="inner-box text-center">
                  <div className="icon-box">
                    <span className="icon ti-user"></span>
                  </div>
                  <h2 className="text-[#025656]">XDS</h2>
                  <h4>XOM Drilling Systems</h4>

                  <div className="text">
                    <ul className="text-start ml-4">
                      <li style={{ listStyleType: 'inside' }}>
                        Directional Drilling
                      </li>
                      <li style={{ listStyleType: 'inside' }}>LWD</li>
                      <li style={{ listStyleType: 'inside' }}>MWD</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="service-block style-two col-lg-6 col-md-6 col-12">
                <div className="inner-box text-center">
                  <div className="icon-box">
                    <span className="icon ti-user"></span>
                  </div>
                  <h2 className="text-greenish">XWM</h2>
                  <h4>XOM Well Maintenance</h4>

                  <div className="text">
                    <ul className="text-start ml-4">
                      <li style={{ listStyleType: 'inside' }}>
                        Well Head Maintenance
                      </li>
                      <li style={{ listStyleType: 'inside' }}>Slickline</li>
                      <li style={{ listStyleType: 'inside' }}>NCP</li>
                    </ul>
                  </div>
                </div>
              </div>
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
            <div className="service-block style-two col-lg-6 col-md-6 col-12">
              <div className="h-80 w-full object-contain flex justify-center items-center">
                <div className="h-[300px] overflow-contain">
                  <Image
                    src="/images/iraq.webp"
                    alt="Iraq"
                    width={300}
                    height={100}
                  />
                </div>
              </div>
            </div>
            <div className="service-block style-two col-lg-6 col-md-6 col-12">
              <div className="h-80 w-full object-contain ">
                <div className="h-[300px] overflow-contain flex justify-center items-center">
                  <Image
                    src="/images/oman.webp"
                    alt="Oman"
                    width={250}
                    height={100}
                  />
                </div>
              </div>
            </div>
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
