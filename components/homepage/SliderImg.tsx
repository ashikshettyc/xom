// 'use client' ensures this is a client-side component.
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function SlidingImg() {
  return (
    <>
      <motion.div
        className="image-column col-lg-6" // Add your styling classes here
        initial={{ opacity: 0, x: -100 }} // Initial state: hidden and slightly to the right
        whileInView={{ opacity: 1, x: 0 }} // Final state: fully visible and moved to original position
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // Animation details
        viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
      >
        <div className="about-image">
          <div className="about-inner-image">
            <Image
              src="/images/about/home-about.webp"
              alt="about"
              width={600}
              height={600}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="content-column col-lg-6 col-md-12 col-sm-12 mb-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }} 
      >
        <div className="about-column">
          <div className="sec-title">
            <div className="title">about XOM</div>
            <h2>
              Led by the <span>belief</span> that anyone can <span>grow</span>
            </h2>
          </div>
          <div className="text">
            <p>
              XOM has been operating in Oman for over 7 years having being
              founded in 2016. XOM inherited it’s drive, culture, values and
              ambitions and is deeply rooted to XOM Oilfield Services. During
              this period, XOM has grown to become one of the most successful
              technology companies in Oman and is often cited as a leading
              example of the new wave of oilfield entrepreneurship in the
              country and beyond.
            </p>

            <p>
              Furthermore, XOM maintains a high in-country value (ICV), high
              service standard, innovative technologies, carried out with young
              state of the art equipment, XOM differentiates itself from its
              competitors in value for money. Our professional, experienced team
              of operators and engineers achieve a world-className service at a
              very high safety standard.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SlidingImg;
