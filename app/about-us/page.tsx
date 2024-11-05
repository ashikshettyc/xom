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
                  className="breadcrumb-item text-greenish "
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
      <div className="about-section lg:mb-16" id="about">
        <div className="auto-container">
          <div className="">
            <div className="row align-items-center clearfix">
              <div className="image-column col-lg-6">
                <div className="about-image">
                  <div className="about-inner-image">
                    <Image
                      src="/images/about/about-work.jpg"
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
                      Driven by the <span>Belief</span> that Everyone Can
                      <span> Thrive</span>
                    </h2>
                  </div>
                  <div className="text">
                    <p>
                      Founded in 2016, XOM has established itself as a
                      pioneering technology leader in Oman’s oilfield sector.
                      With over seven years of dedicated service, XOM has not
                      only grown within Oman but has become recognized
                      internationally for driving a new era of oilfield
                      entrepreneurship. Drawing from our roots in XOM Oilfield
                      Services, we maintain a culture of innovation, integrity,
                      and excellence.
                    </p>

                    <p>
                      Our commitment to high in-country value (ICV), along with
                      our investment in the latest technologies and equipment,
                      enables us to deliver exceptional value to our clients. We
                      believe in combining quality with cost-effectiveness,
                      making us a preferred choice in the industry. XOM’s team
                      of expert operators and engineers brings world-class
                      expertise and a relentless focus on safety to every
                      project, ensuring that we exceed client expectations every
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Experts Section --> */}
      <div className="experts-section pt-0 ">
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
              {/* <div className="pull-right">
                <a href="service.html" className="experts">
                  all experts <span className="arrow ti-angle-right"></span>
                </a>
              </div> */}
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
                    <Image
                      src="/images/members/Musab.jpg"
                      width={500}
                      height={50}
                      alt=""
                    />
                  </a>
                  {/* <!-- Social Box --> */}
                  {/* <ul className="social-box">
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
                  </ul> */}
                </div>
                <div className="lower-box mt-0">
                  <h4>
                    <a href="#">Musab Al Mahruqi</a>
                  </h4>
                  <div className="designation">Owner & Managing Partner</div>
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
                    <Image
                      src="/images/members/Lane.jpg"
                      width={500}
                      height={50}
                      alt=""
                    />
                  </a>
                  {/* <!-- Social Box --> */}
                  {/* <ul className="social-box">
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
                  </ul> */}
                </div>
                <div className="lower-box mt-0">
                  <h4>
                    <a href="#">Lane Roberts</a>
                  </h4>
                  <div className="designation">Owner & Partner</div>
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
                    <Image
                      src="/images/members/Mohammed.jpg"
                      width={500}
                      height={50}
                      alt=""
                    />
                  </a>
                  {/* <!-- Social Box --> */}
                  {/* <ul className="social-box">
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
                  </ul> */}
                </div>
                <div className="lower-box mt-0">
                  <h4>
                    <a href="#">Mohammed Al Barashdi </a>
                  </h4>
                  <div className="designation">Chief Operating Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Experts Section --> */}
      {/* <!-- Reputation Section Two --> */}
      <div className="reputation-section-two pb-2">
        <div className="auto-container">
          <div className="row pb-0 mb-0">
            {/* <!-- Content Column --> */}
            <div className="content-column col-sm-12 pb-0 mb-0">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">why choose us</div>
                  <h2>
                    <span>Your Successful </span>Is Our Reputation
                  </h2>
                </div>
                <div className="blocks-outer">
                  {/* <!-- Reputation Block --> */}
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>In-Depth Market Analysis</h5>
                      <div className="text">
                        We utilize comprehensive market analysis to provide
                        insights that fuel growth. By understanding the nuances
                        of your industry, we tailor our strategies to meet your
                        specific needs.
                      </div>
                    </div>
                  </div>

                  {/* <!-- Reputation Block --> */}
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>Streamlined Collaboration</h5>
                      <div className="text">
                        With tools designed to integrate tasks, documents, and
                        files, we bridge the gap between feedback and action.
                        Our seamless collaboration process ensures that nothing
                        falls through the cracks, keeping projects on track from
                        start to finish.
                      </div>
                    </div>
                  </div>

                  {/* <!-- Reputation Block --> */}
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>Experience & Precision</h5>
                      <div className="text">
                        Our team brings years of experience and an eye for
                        precision to every project. We prioritize detail and
                        accuracy, ensuring that each solution is crafted to
                        perfection.
                      </div>
                    </div>
                  </div>
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>Business Expertise</h5>
                      <div className="text">
                        We’re more than just experts; we’re partners in your
                        journey to success. From strategy to execution, we
                        support your goals with informed guidance and practical
                        solutions.{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Form Column --> */}
            <div className="form-column col-lg-5 col-md-12 col-sm-12">
              {/* <div className="inner-column">
                <div className="form-boxed">
                  <h5>free consulation</h5>

                  <div className="consult-form">
                    <form method="post" action="donate.html">
                  
                      <div className="form-group">
                        <label>full name</label>
                        <input
                          type="text"
                          name="name"
                          value="ashik"
                          placeholder="Jason Staham"
                          required
                        />
                      </div>
                  
                      <div className="form-group">
                        <label>phone number</label>
                        <input
                          type="text"
                          name="phone"
                          value="ashik"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                  
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Reputation Section --> */}
    </>
  );
}

export default page;
