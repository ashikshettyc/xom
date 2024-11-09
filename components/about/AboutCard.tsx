'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
type FounderType = {
  path: string;
  name: string;
  designation: string;
  duration: number;
  delay: number;
};
function AboutCard({ path, name, designation, duration, delay }: FounderType) {
  return (
    <motion.div
      className="team-block col-lg-4 col-md-6 col-sm-6 col-12"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: duration, ease: 'easeOut', delay: delay }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="inner-box">
        <div className="image">
          <a>
            <Image src={`${path}`} width={500} height={80} alt="" />
          </a>
          {/* <!-- Social Box --> */}
          {/* <ul className="social-box">
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="icofont-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="http://facebook.com/"
                        className="icofont-facebook"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="icofont-instagram"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="icofont-linkedin"
                      ></a>
                    </li>
                  </ul> */}
        </div>
        <div className="lower-box mt-0">
          <h4>
            <a>{name}</a>
          </h4>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </motion.div>
  );
}
// about page
export default AboutCard;
