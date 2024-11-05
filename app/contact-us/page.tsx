import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";
export const generateMetadata = (): Metadata => {
    return {
      title: "Contact Us | XOM Oman | Oil Field Services",
      description:
        "Get in touch with XOM Oman to learn more about our comprehensive oil field services. Our expert team is ready to assist you with all your inquiries and provide tailored solutions for your needs.D",
    };
  };
function page() {
  return (
    <>
      <div>
        {/* <!-- Map Section --> */}
        <div className="map-section">
          <div className="contact-map-area">
            <iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.77219523658755!2d58.412216390354246!3d23.58588870550494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff9967575fd1%3A0x6bdeb83b53fa8e2c!2sOffice%201991!5e0!3m2!1sen!2sin!4v1730627262231!5m2!1sen!2sin"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        {/* <!-- End Map Section --> */}

        {/* <!-- Contact Page Section --> */}
        <div className="contact-page-section">
          <div className="auto-container">
            {/* <!-- Contact Info Boxed --> */}
            <div className="contact-info-boxed">
              <div className="row clearfix">
                {/* <!-- Column --> */}
                <div className="column col-lg-6 col-md-6 col-sm-12 pb-10 ">
                  <h2>
                    <span className="text-4xl md:text-6xl">Al khuwair </span>
                  </h2>
                  <div className="text">
                  <span className="text-xl">Aqar office 1991, Al khuwaor, <br />Third floor office no 315 </span>
                  </div>
                  {/* <div className="email">
                    Email:{" "}
                    <a href="mailto:infor@consulte.co">infor@consulte.co</a>
                  </div> */}
                </div>

                {/* <!-- Column --> */}
                <div className="column col-lg-6 col-md-6 col-sm-12">
                  <div className="call">
                   <span className="text-xl"> Call directly:</span>
                    <br />
                    <a href="tel:+96824625907">+968 24625907</a>
                    <a href="tel:+96824621546">+968 24621546</a>
                  </div>
                  {/* <ul className="location-list">
                    <li>
                      <span>Brand Offices:</span>Allentown PA | Allanta, GA |
                      Chicago, IL | Dallas, TX, <br /> Edison, NJ | Houston, TX
                    </li>
                    <li>
                      <span>Work Hours:</span>Mon - Sat: 8.00 - 17.00, Sunday
                      closed
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

          
           <ContactForm/>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default page;
