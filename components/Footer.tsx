/* eslint-disable @next/next/no-before-interactive-script-outside-document */

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import FooterLinks from './footer/FooterLinks';
const Footer: React.FC = () => {
  const currentYear = format(new Date(), 'yyyy');

  return (
    <>
      {/* Main Footer */}
      <footer className="main-footer" id="contact">
        <div className="auto-container">
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-6 col-12">
                <div className="row clearfix">
                  {/* Footer Column */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12 flex justify-start items-center">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <a href="#intro">
                          <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={150}
                            height={150}
                          />
                        </a>
                      </div>
                      {/* <div className="call">
                        Call us directly
                        <a className="phone" href="tel:+96824621546">
                          +968 24621546
                        </a>
                        <a className="phone" href="tel:+96824625907">
                          +968 24625907
                        </a>
                      </div> */}
                    </div>
                  </div>

                  {/* Footer Column */}
                  {/* <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h5>Company</h5>
                      <ul className="list-link">
                        <li>
                          <a href="#intro">Home</a>
                        </li>
                        <li>
                          <a href="#what_we_do">What We Do</a>
                        </li>
                        <li>
                          <a href="#where_we_operate">Where We Operate</a>
                        </li>
                        <li>
                          <a href="#innovation">Innovation</a>
                        </li>
                        <li>
                          <Link href="about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="contact-us">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <FooterLinks/>
                  </div>
                </div>
              </div>

              {/* Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-6 col-12">
                <div className="row clearfix">
                  {/* Footer Column */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h5>Address</h5>
                      <p>
                        P.O Box 2467. PC 133 Al Khuwair <br />
                        Location: Aqar office 1991,
                        <br /> Third floor office no 315
                      </p>
                    </div>
                  </div>

                  {/* Footer Column */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                  <div className=" font-extrabold text-black text-xl my-6 text-start">
                        Call us
                       
                     
                      </div>
                      <div className='text-xl'>
                        <a className="phone text-gray-600" href="tel:+96824621546">
                          +968 24621546
                        </a> <br />
                        <a className="phone text-gray-600" href="tel:+96824625907">
                          +968 24625907
                        </a>
                        </div>
                      </div>
                    {/* <div className="footer-widget newsletter-widget">
                      <h5>Our Newsletter</h5>
                      <div className="text">
                        Subscribe to our newsletter and we will inform you about
                        the latest updates and offers.
                      </div>
             
                      <div className="newsletter-form">
                        <form method="post" action="/">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address..."
                              required
                            />
                            <button
                              type="submit"
                              className="theme-btn icofont-arrow-right"
                            ></button>
                          </div>
                        </form>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="bottom-inner">
                <div className="row clearfix">
                  <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="copyright ">
                      Copyright ©{currentYear} All rights reserved | Developed
                      by{' '}
                      <Link
                        className="text-[#666666]"
                        href="https://www.csloman.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="font-normal text-[#666666]">
                          Concept Solutions LLC
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Main Footer */}

      {/* Search Popup */}
      <div className="search-popup">
        <button className="close-search style-two">
          <span className="icofont-brand-nexus"></span>
        </button>
        <button className="close-search">
          <span className="icofont-arrow-up"></span>
        </button>
        <form method="post" action="/">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              placeholder="Search Here"
              required
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      {/* End Header Search */}
      <Script src="/js/vendor/modernizr-3.6.0.min.js" defer strategy="lazyOnload" />
      <Script
        src="/js/vendor/jquery-3.6.0.min.js" defer
        strategy="beforeInteractive"
      />
      <Script
        src="/js/vendor/jquery-migrate-3.3.2.min.js" defer
        strategy="beforeInteractive"
      />
      <Script src="/js/bootstrap.min.js" defer strategy="beforeInteractive" />
      <Script
        src="/js/jquery.mCustomScrollbar.concat.min.js" defer
        strategy="afterInteractive"
      />
      {/* <Script src="/js/jquery.fancybox.js" defer strategy="lazyOnload" /> */}
      <Script src="/js/appear.js" defer strategy="lazyOnload" />
      <Script src="/js/owl.js" defer strategy="afterInteractive" />
      <Script src="/js/wow.js" defer strategy="lazyOnload" />
      <Script src="/js/parallax.min.js" defer strategy="lazyOnload" />
      <Script src="/js/tilt.jquery.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.paroller.min.js" defer strategy="lazyOnload" />
      {/* <Script src="/js/jquery-ui.js" defer strategy="lazyOnload" /> */}
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
};

export default Footer;
