'use client';
import React from 'react';
import { motion } from 'framer-motion';
function CtaInfo() {
  return (
    <motion.div
      className="row align-items-center"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      viewport={{ once: true, amount: 1 }}
    >
      <div className="col-lg-7">
        {/* <!-- CTA Content Start --> */}
        <div className="cta-content">
          <h3 className="title">
            For Any Information Please{' '}
            <span className="text-bold">Call us now!</span>
          </h3>
          <p>We prodive a dedicated support 24/7 for any your question</p>
        </div>
        {/* <!-- CTA Content End --> */}
      </div>
      <div className="col-lg-5">
        {/* <!-- CTA Phone Number Start --> */}
        <div className="cta-phone text-lg-end text-strat">
          <a href="tel:+96824621546">
            {' '}
            <h2 className="title">+968 24621546</h2>
          </a>
        </div>
        {/* <!-- CTA Phone Number Start --> */}
      </div>
    </motion.div>
  );
}

export default CtaInfo;
