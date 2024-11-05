import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export const generateMetadata = (): Metadata => {
  return {
    title: 'Contact Us | XOM Oman | Oil Field Services',
    description:
      'Get in touch with XOM Oman to learn more about our comprehensive oil field services. Our expert team is ready to assist you with all your inquiries and provide tailored solutions for your needs.D',
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
                  Contact Us
                </li>
              </ol>
            </nav>
            <h2 className="text-white font-bold">Contact Us</h2>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-16 px-4">
        {/* <!-- Contact Page Section --> */}
        <div className="bg-greenish text-white rounded-lg shadow-lg mb-12">
          {/* <!-- Contact Info Boxed --> */}
          <div className="contact-info-boxed">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold">
                Contact Details
              </h2>
            </div>
            <div className="row clearfix">
              {/* <!-- Column --> */}

              {/* Contact Information */}
              <div className="w-full md:w-1/2 flex flex-col gap-6 text-lg">
                {/* Phone Section */}
                <div className="flex items-center gap-4">
                  <Phone className="text-xl text-green-400" />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl">Call Directly:</span>
                    <a href="tel:+96824625907" className="text-white text-lg">
                      +968 24625907
                    </a>
                    <a href="tel:+96824621546" className="text-white text-lg">
                      +968 24621546
                    </a>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-center gap-4">
                  <Mail className="text-xl text-green-400" />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl">Email:</span>
                    <a
                      href="mailto:info@xom.com"
                      className="text-white text-lg"
                    >
                      info@xom.com
                    </a>
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-center gap-4">
                  <MapPin className="text-xl text-green-400" />
                  <div className="flex flex-col gap-2">
                    <span className="font-medium text-xl">Office Address:</span>
                    <p className="leading-relaxed text-gray-200">
                      Al Khuwair, <br /> Aqar Office 1991, <br />
                      Al Khuwair, Third Floor, Office No. 315
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Column --> */}
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <ContactForm />

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
        </div>
      </div>
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

        {/* <!-- End Map Section --> */}
      </div>
    </>
  );
}

export default page;
