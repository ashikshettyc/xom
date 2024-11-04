import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export const generateMetadata = (): Metadata => {
  return {
    title: 'About Us | XOM Oman | Oil Field Services',
    description:
      'Learn more about XOM Oman and our expertise in oil field services.',
  };
};
function page() {
  return (
    <>
      <section>
        <div
          className="page-title d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url('/images/oilRig.webp')",
            height: '60vh',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container  text-white text-2xl pt-1/2">
            {/* Bootstrap Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb  mb-3">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-[#198754] "
                  aria-current="page"
                >
                  About Us
                </li>
              </ol>
            </nav>
            <h2 className="text-white font-bold">About Us</h2>
          </div>
        </div>
      </section>
      {/* <!-- About Section --> */}
      <div className="about-section" id="about">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row align-items-center clearfix">
              <div className="image-column col-lg-6">
                <div className="about-image">
                  <div className="about-inner-image">
                    <Image
                      src="/images/about/home-about.png"
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

      {/* <!-- Reputation Section Two --> */}
      <div className="reputation-section-two">
        <div className="auto-container">
          <div className="row clearfix">
            {/* <!-- Content Column --> */}
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">why choose us</div>
                  <h2>
                    <span>Your Successful </span>Is
                    <br /> Our Reputation
                  </h2>
                </div>
                <div className="blocks-outer">
                  {/* <!-- Reputation Block --> */}
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>Strong Martket Analysis</h5>
                      <div className="text">
                        Tasks, docs, and files integrate with Arado’s chat to
                        close the <br /> gaps between feedback and action.
                      </div>
                    </div>
                  </div>

                  {/* <!-- Reputation Block --> */}
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>Experience & Percision</h5>
                      <div className="text">
                        Create multiple discussions to keep all relevant
                        conversations <br /> together, all in one place with
                        Arado
                      </div>
                    </div>
                  </div>

                  {/* <!-- Reputation Block --> */}
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>Experts About Business</h5>
                      <div className="text">
                        Create multiple discussions to keep all relevant
                        conversations <br /> together, all in one place with
                        Arado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Form Column --> */}
            <div className="form-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="form-boxed">
                  <h5>free consulation</h5>

                  <div className="consult-form">
                    <form method="post" action="donate.html">
                      {/* <!--Form Group--> */}
                      <div className="form-group">
                        <label>full name</label>
                        <input
                          type="text"
                          name="name"
                          value=""
                          placeholder="Jason Staham"
                          required
                        />
                      </div>
                      {/* <!--Form Group--> */}
                      <div className="form-group">
                        <label>phone number</label>
                        <input
                          type="text"
                          name="phone"
                          value=""
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                      {/* <!--Form Group--> */}
                      <div className="form-group">
                        <label>topics</label>
                        <select className="custom-select-box">
                          <option>Choose topic</option>
                          <option>Topic 01</option>
                          <option>Topic 02</option>
                          <option>Topic 03</option>
                          <option>Topic 04</option>
                        </select>
                      </div>
                      {/* <!--Form Group--> */}
                      <div className="form-group">
                        <label>message</label>
                        <textarea
                          name="message"
                          placeholder="Write your message here"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="txt">send your messenger</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Reputation Section --> */}

      {/* <!-- Experts Section --> */}
      <div className="experts-section">
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title">
            <div className="clearfix">
              <div className="pull-left">
                <div className="title">our services</div>
                <h2>
                  We Are <span>Friendly & Profressional</span>
                </h2>
              </div>
              <div className="pull-right">
                <a href="service.html" className="experts">
                  all experts <span className="arrow ti-angle-right"></span>
                </a>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            {/* <!-- Team Block --> */}
            <div className="team-block col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <a href="#">
                    <img src="images/resource/team-1.jpg" alt="" />
                  </a>
                  {/* <!-- Social Box --> */}
                  <ul className="social-box">
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="icofont-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="http://facebook.com/"
                        className="icofont-facebook"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="icofont-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="icofont-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="lower-box mt-0">
                  <h4>
                    <a href="#">Edward Eric Jr</a>
                  </h4>
                  <div className="designation">Business & Financial Expert</div>
                </div>
              </div>
            </div>

            {/* <!-- Team Block --> */}
            <div className="team-block col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="inner-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <a href="#">
                    <img src="images/resource/team-2.jpg" alt="" />
                  </a>
                  {/* <!-- Social Box --> */}
                  <ul className="social-box">
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="icofont-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="http://facebook.com/"
                        className="icofont-facebook"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="icofont-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="icofont-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="lower-box mt-0">
                  <h4>
                    <a href="#">Tom Holland</a>
                  </h4>
                  <div className="designation">
                    Logistic & Communication Expert
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Team Block --> */}
            <div className="team-block col-lg-4 col-md-6 col-sm-6 col-12">
              <div
                className="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <a href="#">
                    <img src="images/resource/team-3.jpg" alt="" />
                  </a>
                  {/* <!-- Social Box --> */}
                  <ul className="social-box">
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="icofont-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="http://facebook.com/"
                        className="icofont-facebook"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="icofont-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="icofont-linkedin"
                      ></a>
                    </li>
                  </ul>
                </div>
                <div className="lower-box mt-0">
                  <h4>
                    <a href="#">Laura Erakovic</a>
                  </h4>
                  <div className="designation">Consumer Market Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Experts Section --> */}
    </>
  );
}

export default page;
