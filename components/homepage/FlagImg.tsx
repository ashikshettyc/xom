"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
type ImageDesc = {
    src: string,
    alt:string,
    width:number,
    height:number,
    x:number
}
function FlagImg({src, alt, width, height, x}: ImageDesc) {
  return (
    <motion.div className="service-block style-two col-lg-6 col-md-6 col-12"
    initial={{ opacity: 0, x: x }}
    whileInView={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
    viewport={{ once: true, amount: 0.5 }} 
    >
    <div className="h-80 w-full object-contain flex justify-center items-center">
      <div className="h-[300px] overflow-contain ">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  </motion.div>
  )
}

export default FlagImg