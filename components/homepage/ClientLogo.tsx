'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClientLogo() {
  return (
    <motion.div
        
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    viewport={{ once: true, amount: 0.5 }}>

   
    <div className="sponsor-section ">
      <motion.div
        className="sponsor-track"
        
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 60, // Speed of the loop
          ease: 'linear',
          repeat: Infinity
          
        }}
      >
       
        {/* Add logos here and repeat them for smooth looping */}
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        <SponsorLogo src="/images/PDO.webp" alt="PDO" />
        <SponsorLogo src="/images/Shell Oman.webp" alt="Shell Oman" />
        <SponsorLogo src="/images/anton.webp" alt="Anton" />
        <SponsorLogo src="/images/Daleel.webp" alt="Daleel" />
        
      </motion.div>
    </div>
    </motion.div>
  );
}

function SponsorLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="sponsor-logo">
      <Image src={src} alt={alt} width={100} height={50} style={{ objectFit: 'contain' }} />
    </div>
  );
}
