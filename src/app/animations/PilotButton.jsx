"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const PilotButton = () => {

    //Variants
    const variants = {
        bg: {
            rest: {
                width: "18px",
                height: "18px",
                borderRadius: "999px",
                right: "11px",
                top: "50%",
                y: "-50%",
                backgroundColor: "#FFFFFF",
                transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] }
            },
            hover: {
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                borderRadius: "5px",
                right: "1px",
                top: "1px",
                y: "0%",
                backgroundColor: "#FFFFFF",
                transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] }
            }
        },
        
        //Label Slide
        text: {
            rest: { y: 0, opacity: 1 },
            hover: {
                y: -40,
                opacity: 0,
                transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
            }
        },
        textIn: {
            rest: { y: 0, opacity: 0 },
            hover: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, delay: 0.1, ease: [0.19, 1, 0.22, 1] }
            }
        },
        icon: {
            rest: { x: 0, color: "#3448FF" },
            hover: { x: 2, color: "#3448FF" }
        }
    };

    return (
        <div className="flex items-center gap-3 md:mt-6">
            <motion.button
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative group flex items-center gap-2 bg-[#3448FF] pl-5 pr-1.5 py-0.5 font-bold overflow-hidden border-[1px] border-transparent transition-all duration-300 hover:border-[#3448FF] active:scale-[0.97]"
                style={{ borderRadius: '6px' }} >

                <motion.div
                    variants={variants.bg}
                    className="absolute z-10 pointer-events-none" />

                {/* 2. Masked Label Container */}
                <div className="relative z-20 h-10 overflow-hidden flex flex-col justify-center">
                    <motion.span
                        variants={variants.text}
                        className="text-[14px] text-white tracking-tight">
                        Start a Pilot
                    </motion.span>

                    <motion.span
                        variants={variants.textIn}
                        className="absolute text-[14px] text-[#3448FF] tracking-tight" >
                        Start a Pilot
                    </motion.span>
                </div>


                <div className="relative z-20 flex items-center justify-center w-7 h-7 shrink-0">
                    <motion.div
                        variants={variants.icon}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="flex items-center justify-center" >
                        <FiArrowRight size={14} strokeWidth={3} />
                    </motion.div>
                </div>
            </motion.button>
        </div>
    );
};

export default PilotButton;