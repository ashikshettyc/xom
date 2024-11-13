import AllHeadings from '@/components/AllHeadings';
import ServiceCard from '@/components/services/ServiceCard';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'
export const generateMetadata = (): Metadata => {
    return {
      title: 'Services | XOM Oman | Oil Field Services',
      description:
        'Get in touch with XOM Oman to learn more about our comprehensive oil field services. Our expert team is ready to assist you with all your inquiries and provide tailored solutions for your needs.',
    };
  };
function page() {
  return (
    <div>
        <section>
        <div className="relative page-title d-flex align-items-center justify-content-center  bg-[url('/images/background/our-team.webp')] h-[50vh] xl:h-[60vh] w-full bg-cover  bg-no-repeat lg:bg-[center_top_-6rem] ">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div> */}
        <div className='auto-container w-100'>
        <div className="  text-white text-2xl pt-1/2 z-10">
            {/* Bootstrap Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb  mb-3">
              <li className="breadcrumb-item">
                  <Link href="/" className="text-white " id="white-textss">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-greenish "
                  aria-current="page"
                >
                  Services
                </li>
              </ol>
            </nav>
            <h2 className="text-white font-bold">Services</h2>
          </div>
        </div>
          
        </div>
      </section>
      <div className="experts-section pt-5 ">
        <div className="auto-container">
      <AllHeadings title="our services" description1="Best Solutions " description2="For Your Business" y={-100}/>
      <ServiceCard/>
      </div>
      </div>
    </div>
  )
}

export default page