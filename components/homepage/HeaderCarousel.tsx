'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderCarosel() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if on the homepage
    if (pathname === '/') {
      // Dynamically create a script tag to load script.js
      const script = document.createElement('script');
      script.src = '/js/customScript.js'; // Adjust the path to where script.js is located in the public directory
      script.async = true;

      // Append the script to the document body
      document.body.appendChild(script);

      // Clean up: remove script when the component unmounts or pathname changes
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [pathname]);
  return (
    <div className="banner-section" id="intro">
      <div className="main-slider-carousel owl-carousel owl-theme">
        <div className="slide bg-[url('/images/main-slider/intro-1.webp')]"  
        // style={{ backgroundImage: 'url("/images/main-slider/intro-1.jpg")'}}

        // data-bg-image="images/main-slider/intro-1.jpg"
        >
          <div className="auto-container w-100">
            <div className="row clearfix">
              <div className="content-column col-lg-7 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="title">XOM Oilfield Services</div>
                  <h1 className="text-5xl">
                    Global <span>Aspirations</span>,<br />
                    Local <span>Inspirations</span>
                  </h1>
                  <div className="text">
                    XOM inherited its drive, culture, values, and ambitions and{' '}
                    <br />
                    is deeply rooted to XOM Oilfield Services. During this
                    period, <br />
                    XOM has grown to become one of the most successful
                    <br />
                    technology companies in Oman.
                  </div>
                  <div className="btn-box">
                    <Link href="contact-us" className="theme-btn btn-style-one">
                      <span className="txt">Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
