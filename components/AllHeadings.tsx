'use client';
import React from 'react';
import { motion } from 'framer-motion';
type Titles = {
  title: string;
  description1: string;
  description2: string;
  y: number;
};
function AllHeadings({ title, description1, description2, y }: Titles) {
  return (
    <motion.div
      className="sec-title"
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="clearfix">
        <div className="">
          <div className="title">{title}</div>
          <h2>
            {description1}
            <span>{description2}</span>
          </h2>
        </div>
      </div>
    </motion.div>
  );
}

export default AllHeadings;
