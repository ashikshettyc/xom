import AllHeadings from '@/components/AllHeadings';
import ServiceCard from '@/components/services/ServiceCard';
import { Metadata } from 'next';
import Image from 'next/image';
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
    <div className='min-h-screen flex flex-col'>
        <section>
        <div className="relative page-title d-flex align-items-center justify-content-center h-[50vh] xl:h-[60vh] w-full bg-cover  bg-no-repeat lg:bg-[center] ">
         <Image className='object-cover'
        alt="Mountains"
        src="/images/background/oilgas.webp"
        fill
        quality={100}
      />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-30"></div>
        <div className='auto-container w-100 flex'>
        <div className="  text-white text-2xl  pt-1/2 z-10">
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
      <section className='flex flex-col'>
      <div className="experts-section xl:!pb-0 pt-5 lg:mb-14 xl:mb-0">
        <div className="auto-container">
      <AllHeadings title="our services" description1="Best Solutions " description2="For Your Business" y={-100}/>
      <ServiceCard/>
      </div>
      
      </div>
      <div className="auto-container flex pb-5 lg:pt-0">
            <blockquote
              className="text-black text-sm py-7 px-9 bg-[#f7f7f7] "
              style={{ borderLeft: "4px solid #025652" }}
            >
              Our portfolio of drilling technologies, mud motors, Rotary
              steerable systems, and LWD formation evaluation tools are
              engineered to help you precisely reach your targets, maximize your
              production, and reduce your drilling cost. HT/HP systems that can
              provide reliable performance in high temperature 175o C deep
              drilling conditions with long battery life that extend to drilling
              more than 500 hours.
            </blockquote>
          </div>
      </section>
    
    </div>
  )
}

export default page