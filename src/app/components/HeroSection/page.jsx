"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ylogo from '../../../../public/Y.png';
import PilotButton from '@/app/animations/PilotButton';

const HeroSection = () => {
    return (
        <section className='min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 items-stretch bg-transparent overflow-hidden font-inter'>

            {/* LEFT SIDE: Content Alignment with .container */}
            <div className='flex items-center justify-end pt-20 md:pt-25 lg:pt-0'>
                <div className='container !max-w-[768px] !mr-0 !ml-auto flex flex-col justify-center px-6 lg:px-12 lg:pr-20'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className='flex flex-col gap-6'
                    >
                        {/* YC Badge */}
                        <div className='flex w-fit gap-2.5 items-center bg-white px-3 py-1.5 rounded-full shadow-sm'>
                            <Image src={ylogo} alt="YC" width={18} height={18} />
                            <p className='text-xs md:text-[13px] font-semibold text-[#08144F]'>Backed by Y Combinator</p>
                        </div>

                        {/* Headline */}
                        <h1 className='text-[32px] md:text-[60px] lg:text-[72px] text-[#08144F] font-normal leading-[1.05] tracking-[-0.03em]'>
                            AI Agents Built For Intelligent Servicing
                        </h1>

                        {/* Description */}
                        <p className='text-[#565656] text-[13px] md:text-[16px] md:pr-50'>
                            Mitigate human compliance risk with rigorous model governance. Trusted by leading financial institutions to unify Voice, Email, and SMS across the entire customer lifecycle.
                        </p>

                        <div>
                            <PilotButton />
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* RIGHT SIDE: Full Viewport Visual */}
            <div className='flex items-center justify-start overflow-hidden pt-10 md:pt-15 lg:pt-0'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='w-full h-full min-h-[500px] lg:min-h-screen'
                >
                    <iframe
                        src="https://my.spline.design/3dglassherobg-dnzlBF8PzDDcIFvm5c2HMF94/"
                        className="w-full h-full pointer-events-none scale-110 lg:scale-[1.4] transform-origin-left"
                        style={{ border: 'none' }}
                        title="Hero 3D Visual"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;