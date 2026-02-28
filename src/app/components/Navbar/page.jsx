import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PilotButton from '../../animations/PilotButton';
import domulogo from '../../../../public/domulogo.png';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] w-full bg-[#EFF3FF0] backdrop-blur-md border-b border-gray-100">
            <div className="container w-full mx-auto flex items-center justify-between">
                {/* 1. Logo Section */}
                <div>
                    <Link href="/">
                        <div className="relative w-[110px] h-[32px]">
                            <Image
                                src={domulogo}
                                alt="Domu Logo"
                                fill
                                className="object-contain brightness-40"
                                priority />
                        </div>
                    </Link>
                </div>

                {/* 2. Navigation Links (Explicit Declaration) */}
                <div className="hidden md:block w-5/8">
                    <ul className="flex gap-10 justify-left">
                        <li>
                            <Link href="/about" className="text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#features" className="text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">
                                Benefits
                            </Link>
                        </li>
                        <li>
                            <Link href="#integrations" className="text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">
                                Integrations
                            </Link>
                        </li>
                        <li>
                            <Link href="#compliance" className="text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">
                                Compliance
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" className="text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="text-[16px] text-[#383838] hover:text-[#0045F2] font-medium tracking-tight transition-colors duration-200">
                                Resources
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3. CTA Section */}
                <div className="mb-6">
                    <PilotButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;