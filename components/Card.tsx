"use client";
import React from 'react';
import { motion } from 'framer-motion';

type Cardtypes = {
    title: string;
    subHeading: string;
    list1: string;
    list2: string;
    list3: string;
    y: number;
    path:string
};

function Card({ title, subHeading, list1, list2, list3, y, path }: Cardtypes) {
    return (
        <motion.div
            className="modern-card-wrapper col-lg-6 col-md-6 col-12 p-6 rounded-2xl"
            initial={{ opacity: 0, y: y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className={`relative modern-card p-8 bg-white  rounded-2xl shadow-lg transform transition-all hover:scale-[1.02] hover:shadow-xl bg-[url('/images/${path}')] bg-contain bg-center`}>
            <div className='absolute inset-0  rounded-2xl bg-black opacity-50'></div>
                {/* <div className="icon-box mb-6 flex justify-center items-center bg-[#fb8f44] text-white rounded-full w-16 h-16 shadow-md">
                    <span className="icon ti-user text-2xl"></span>
                </div> */}

                <h2 className="text-white font-semibold text-6xl mb-2 text-center" >{title}</h2>
                <h4 className="text-white font-medium text-2xl mb-4 text-center">{subHeading}</h4>

                <ul className="text-start space-y-3 text-white leading-relaxed">
                    <li className="flex items-center space-x-2">
                        <p className="w-2 h-2 bg-[#fb8f44] rounded-full"></p>
                        <p className='text-xl text-white'>{list1}</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <p className="w-2 h-2 bg-[#fb8f44] rounded-full"></p>
                        <p className='text-xl text-white'>{list2}</p>
                    </li>
                    <li className="flex items-center space-x-2">
                        <p className="w-2 h-2 bg-[#fb8f44] rounded-full"></p>
                        <p className='text-xl text-white'>{list3}</p>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}

export default Card;
