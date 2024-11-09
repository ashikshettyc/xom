'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function SlidingImg() {
  return (
    <>
      <motion.div
        className="image-column col-lg-6" // Add your styling classes here
        initial={{ opacity: 0, x: -60 }} // Initial state: hidden and slightly to the right
        whileInView={{ opacity: 1, x: 0 }} // Final state: fully visible and moved to original position
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }} // Animation details
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
      >
        <div className="about-image">
          <div className="about-inner-image">
            <Image
              src="/images/about/about-work.webp"
              width={600}
              height={600}
              alt="about"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="content-column col-lg-6 col-md-12 col-sm-12 mb-0"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
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
              Founded in 2016, XOM has established itself as a pioneering
              technology leader in Oman’s oilfield sector. With over seven years
              of dedicated service, XOM has not only grown within Oman but has
              become recognized internationally for driving a new era of
              oilfield entrepreneurship. Drawing from our roots in XOM Oilfield
              Services, we maintain a culture of innovation, integrity, and
              excellence.
            </p>

            <p>
              Our commitment to high in-country value (ICV), along with our
              investment in the latest technologies and equipment, enables us to
              deliver exceptional value to our clients. We believe in combining
              quality with cost-effectiveness, making us a preferred choice in
              the industry. XOM’s team of expert operators and engineers brings
              world-class expertise and a relentless focus on safety to every
              project, ensuring that we exceed client expectations every time.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SlidingImg;
