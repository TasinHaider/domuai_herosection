"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PilotButton from '../../animations/PilotButton';
import domulogo from '../../../../public/domulogo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#EFF3FF]/80 backdrop-blur-md border-b border-gray-100">
            <div className="container">

                {/* --- DESKTOP SECTION */}
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
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        <div className="w-5/8">
                            <ul className="flex md:gap-5 lg:gap-10 justify-left items-center">
                                <li><Link href="/about" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">About</Link></li>
                                <li><Link href="#features" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Benefits</Link></li>
                                <li><Link href="#integrations" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Integrations</Link></li>
                                <li><Link href="#compliance" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Compliance</Link></li>
                                <li><Link href="/careers" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Careers</Link></li>
                                <li><Link href="/faq" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">FAQ</Link></li>
                                <li><Link href="/resources" className="md:text-[12px] lg:text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">Resources</Link></li>
                            </ul>
                        </div>

                        {/* 3. CTA Section */}
                        <div className="flex items-center mb-6">
                            <PilotButton />
                        </div>
                    </div>
                </div>

                {/* --- MOBILE SECTION (Senior Level Implementation) --- */}
                <div className='block md:hidden py-4'>
                    <div className="w-full mx-auto flex items-center justify-between relative px-4">
                        {/* 1. Logo Section */}
                        <div className="z-[110]">
                            <Link href="/" aria-label="Home">
                                <div className="relative w-[110px] h-[32px]">
                                    <Image
                                        src={domulogo}
                                        alt="Domu Logo"
                                        fill
                                        className="object-contain brightness-0"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* 2. Mobile Menu Trigger & Navigation */}
                        <div className="flex items-center">
                            {/* Semantic Button for Accessibility */}
                            <button
                                onClick={toggleMenu}
                                className="text-2xl cursor-pointer text-[#383838] z-[110] p-2 -mr-2 focus:outline-none"
                                aria-expanded={show}
                                aria-label={show ? "Close Menu" : "Open Menu"}
                            >
                                {show ? <RxCross1 /> : <GiHamburgerMenu />}
                            </button>

                            {/* Sliding Menu Overlay */}
                            <div
                                className={`fixed inset-0 w-full h-screen bg-white transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-[105] ${show ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                            >
                                <nav className="flex flex-col items-center justify-center h-full">
                                    <ul className="flex flex-col items-center gap-8">
                                        {/* Explicit Component Declaration for Motionless Stagger Effect */}
                                        <li>
                                            <Link
                                                onClick={toggleMenu}
                                                href="/about"
                                                className="text-2xl text-[#383838] font-semibold hover:text-[#0045F2] transition-colors"
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={toggleMenu}
                                                href="#features"
                                                className="text-2xl text-[#383838] font-semibold hover:text-[#0045F2] transition-colors"
                                            >
                                                Benefits
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={toggleMenu}
                                                href="#integrations"
                                                className="text-2xl text-[#383838] font-semibold hover:text-[#0045F2] transition-colors"
                                            >
                                                Integrations
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={toggleMenu}
                                                href="/careers"
                                                className="text-2xl text-[#383838] font-semibold hover:text-[#0045F2] transition-colors"
                                            >
                                                Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={toggleMenu}
                                                href="/faq"
                                                className="text-2xl text-[#383838] font-semibold hover:text-[#0045F2] transition-colors"
                                            >
                                                FAQ
                                            </Link>
                                        </li>

                                        {/* Final CTA within Menu */}
                                        <li className="mt-4">
                                            <PilotButton />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;