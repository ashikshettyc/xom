import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
export const generateMetadata = (): Metadata => {
    return {
      title: "About Us | XOM Oman | Oil Field Services",
      description: "Learn more about XOM Oman and our expertise in oil field services.",
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
          backgroundPosition: "center"
        }}
      >
        <div className="container  text-white text-2xl pt-1/2">            
          {/* Bootstrap Breadcrumb */}
          <nav aria-label="breadcrumb" >
            <ol className="breadcrumb  mb-3">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item text-[#198754] " aria-current="page">
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
                      Led by the <span>belief</span> that anyone can{" "}
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
    </>
  )
}

export default page