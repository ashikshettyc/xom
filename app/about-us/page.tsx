import AboutCard from '@/components/about/AboutCard';
import SlidingImg from '@/components/about/SliderImg';
import AllHeadings from '@/components/AllHeadings';
import { Metadata } from 'next';
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
        <div className="relative page-title d-flex align-items-center justify-content-center bg-[url('/images/oilRig.webp')] h-[50vh] w-full bg-cover bg-center">
          {/* <Image width={500} height={5000} alt="background" className='absolute inset-0'/> */}
          <div className='auto-container w-100'>
          <div className="  text-white text-2xl pt-1/2">
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
          
        </div>
      </section>
      {/* <!-- About Section --> */}
      <div className="about-section lg:mb-16" id="about">
        <div className="auto-container">
          <div className="">
            <div className="row align-items-center clearfix">
              <SlidingImg />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Experts Section --> */}
      <div className="experts-section pt-0 ">
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <AllHeadings
            title="our Leaders"
            description1="We Are"
            description2=" Friendly & Professional"
            y={-100}
          />
          {/* <div className="sec-title">
            <div className="clearfix">
              <div className="">
                <div className="title">our services</div>
                <h2>
                  We Are <span>Friendly & Profressional</span>
                </h2>
              </div>
            </div>
          </div> */}

          <div className="row clearfix">
            {/* <!-- Team Block --> */}
            <AboutCard
              path="/images/members/Musab.jpg"
              name="Musab Al Mahruqi"
              designation="Owner & Managing Partner"
              duration={1}
              delay={0.8}
            />
            <AboutCard
              path="/images/members/LaneLeader.webp"
              name="Lane Roberts"
              designation="Owner & Partner"
              duration={1.2}
              delay={1}
            />
            <AboutCard
              path="/images/members/Mohammed.jpg"
              name="Mohammed Al Barashdi"
              designation="Chief Operating Officer"
              duration={1.4}
              delay={1.2}
            />
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
                <AllHeadings
                  title="why choose us"
                  description1="Your Successful"
                  description2=" Is Our Reputation"
                  y={-100}
                />
                <div className="blocks-outer">
                  {/* <!-- Reputation Block --> */}
                  <div className="reputation-block">
                    <div className="inner-box">
                      <h5>Empowering Growth with Market Insights</h5>
                      <div className="text">
                        Our in-depth market insights drive meaningful growth. By
                        deeply understanding your industry, we craft strategies
                        that unlock new opportunities and are tailored to your
                        unique goals.
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
          </div>
        </div>
      </div>
      {/* <!-- End Reputation Section --> */}
    </>
  );
}

export default page;
