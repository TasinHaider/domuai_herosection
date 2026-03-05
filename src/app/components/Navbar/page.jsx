"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PilotButton from '../../animations/PilotButton';
import domulogo from '../../../../public/domulogo.png';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#EFF3FF]/80 backdrop-blur-md border-b border-gray-100">
            <div className="container">

                {/* --- DESKTOP SECTION --- */}
                <div className='hidden md:block'>
                    <div className="w-full mx-auto flex items-center justify-between h-20">
                        {/* 1. Logo Section */}
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <div className="relative w-[110px] h-[32px]">
                                    <Image
                                        src={domulogo}
                                        alt="Domu Logo"
                                        fill
                                        className="object-contain brightness-0"
                                        priority />
                                </div>
                            </Link>
                        </div>

                        <div className="w-5/8">
                            <ul className="flex md:gap-5 lg:gap-10 justify-left items-center">
                                <li><Link href="/" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">About</Link></li>
                                <li><Link href="/" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Benefits</Link></li>
                                <li><Link href="/" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Integrations</Link></li>
                                <li><Link href="/" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Compliance</Link></li>
                                <li><Link href="/" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Careers</Link></li>
                                <li><Link href="/" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">FAQ</Link></li>
                                <li><Link href="/" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Resources</Link></li>
                            </ul>
                        </div>

                        {/* 3. Button Section*/}
                        <div className="flex items-center mb-6">
                            <PilotButton />
                        </div>
                    </div>
                </div>

                {/* --- MOBILE SECTION --- */}
                <div className='block md:hidden py-4 overflow-hidden'>
                    <div className="w-full mx-auto flex items-center justify-between relative px-6">
                        {/* 1. Logo Section */}
                        <div className="z-[120]">
                            <Link href="/" aria-label="Home">
                                <div className="relative w-[100px] h-[28px]">
                                    <Image
                                        src={domulogo}
                                        alt="Domu Logo"
                                        fill
                                        className={`object-contain transition-all duration-500 ${show ? 'invert' : 'brightness-0'}`}
                                        priority />
                                </div>
                            </Link>
                        </div>
                        {/* 2. Mobile Menu Trigger & Navigation */}
                        <div className="flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="relative text-2xl cursor-pointer text-[#383838] z-[120] p-2 -mr-2 focus:outline-none"
                                aria-expanded={show} >
                                <div className="relative w-6 h-6">
                                    <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${show ? 'rotate-45 top-3' : 'top-1'}`} />
                                    <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${show ? '-rotate-45 top-3' : 'top-4'}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {show && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, transition: { delay: 0.4 } }}
                                        className="fixed inset-0 w-full h-screen bg-[#F8F9FA] z-[110] px-8 pt-32" >
                                        <div className="absolute top-10 right-10 text-[10rem] font-bold text-black/[0.02] select-none pointer-events-none">
                                            MENU
                                        </div>

                                        <nav className="relative h-full flex flex-col justify-between pb-25">
                                            <ul className="flex flex-col gap-6">
                                                <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1, ease: [0.19, 1, 0.22, 1] }}>
                                                    <Link onClick={toggleMenu} href="/" className="group flex items-end gap-3">
                                                        <span className="text-[10px] font-mono text-gray-400 mb-2">01</span>
                                                        <span className="text-5xl font-bold tracking-tighter text-[#1a1a1a] group-hover:text-[#0045F2] transition-colors">About</span>
                                                    </Link>
                                                </motion.li>

                                                <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15, ease: [0.19, 1, 0.22, 1] }}>
                                                    <Link onClick={toggleMenu} href="/" className="group flex items-end gap-3">
                                                        <span className="text-[10px] font-mono text-gray-400 mb-2">02</span>
                                                        <span className="text-5xl font-bold tracking-tighter text-[#1a1a1a] group-hover:text-[#0045F2] transition-colors">Benefits</span>
                                                    </Link>
                                                </motion.li>

                                                <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, ease: [0.19, 1, 0.22, 1] }}>
                                                    <Link onClick={toggleMenu} href="/" className="group flex items-end gap-3">
                                                        <span className="text-[10px] font-mono text-gray-400 mb-2">03</span>
                                                        <span className="text-5xl font-bold tracking-tighter text-[#1a1a1a] group-hover:text-[#0045F2] transition-colors">Integrations</span>
                                                    </Link>
                                                </motion.li>

                                                <motion.li initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.25, ease: [0.19, 1, 0.22, 1] }}>
                                                    <Link onClick={toggleMenu} href="/" className="group flex items-end gap-3">
                                                        <span className="text-[10px] font-mono text-gray-400 mb-2">04</span>
                                                        <span className="text-5xl font-bold tracking-tighter text-[#1a1a1a] group-hover:text-[#0045F2] transition-colors">Careers</span>
                                                    </Link>
                                                </motion.li>

                                                <motion.li initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.35 }} className="mt-4">
                                                    <PilotButton className="w-full py-5 rounded-2xl shadow-xl shadow-blue-500/10" />
                                                </motion.li>
                                            </ul>

                                            {/* Footer */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="border-t border-gray-200 pt-6 flex justify-between items-center" >
                                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">© 2026 Domu Inc.</p>
                                            </motion.div>
                                        </nav>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;