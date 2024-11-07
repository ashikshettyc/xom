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
        <div className="page-title d-flex align-items-center justify-content-center  bg-[url('/images/oilRig.webp')] h-[60vh] w-full bg-cover bg-center">
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
      <div className="block md:relative container mx-auto py-4 px-0 md:py-16 md:px-16 z-10 mt-5">
        {/* <!-- Contact Page Section --> */}
        <div className="bg-greenish text-white rounded-lg shadow-lg mb-12 p-3 md:p-5">
          {/* <!-- Contact Info Boxed --> */}
          <div className="contact-info-boxed md:p-12  ">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-semibold">
                We&apos;d Love to Hear From You
              </h2>
            </div>
            <div className="row flex gap-y-4">
              {/* <!-- Column --> */}

              {/* Contact Information */}
              <div className="column col-lg-5 col-md-6 col-sm-12 flex flex-col gap-12 text-lg">
                {/* Phone Section */}
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-start gap-2">
                    <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                      <Phone className="text-xl text-green-400" size={30} />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-medium text-2xl">Phone:</span>
                      <div>
                        <a
                          href="tel:+96824625907"
                          className="text-white text-lg"
                        >
                          +968 24625907 /{' '}
                        </a>
                        <a
                          href="tel:+96824621546"
                          className="text-white text-lg"
                        >
                          24621546
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2 justify-center items-start">
                    <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                      <Mail className="text-xl text-green-400" size={30} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-2xl">Email:</span>
                      <a
                        href="mailto:info@xom.com"
                        className="text-white text-lg"
                      >
                        info@xom.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2 justify-center items-start">
                    <div className="h-16 w-16 rounded-full bg-white flex justify-center items-center">
                      <MapPin className="text-xl text-green-400" size={30} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-2xl">
                        Office Address:
                      </span>
                      <p className="leading-relaxed text-gray-200">
                        Al Khuwair, <br /> Aqar Office 1991, <br />
                        Third Floor, Office No. 315
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Column --> */}
              <div className="column col-lg-7 col-md-6 col-sm-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Map Section --> */}
      <div className="block md:relative -top-28 -z-0">
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
      </div>
    </>
  );
}

export default page;
